import { Fornecedor } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FornecedorService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/


  public fornecedor: any = {idFornecedor: 0};

  public maskCnpj = [ /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/];

  public maskTelefone = ['+', /\d/, /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', ' ', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public maskCelular = ['+', /\d/, /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public title = "";

  public confSenha = null;

  public masks = TextMasks;


  constructor(
    private fornecedorService: FornecedorService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<FornecedorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.idFornecedor != null)
    {
      this.onFindFornecedorById(data.idFornecedor);
    }


  }

  ngOnInit()
  {
 
    if (this.data.idFornecedor)
      this.title = "Alterar fornecedor";
    else
      this.title = "Inserir fornecedor";
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindFornecedorById(id: any)
  {
    this.fornecedorService.findFornecedorById(id).subscribe(fornecedor =>
    {
      this.fornecedor = fornecedor;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

      if (!this.validaCNPJ(this.fornecedor.cnpj))
      {
        this.openSnackBarService.openError('CNPJ inválido.');
        return;
      }
    
 
    if (this.fornecedor.telefone)
    {
        var numb = this.fornecedor.telefone.match(/\d/g);
        numb = numb.join("").toString();

        if(numb.length != 13)
        {
          this.openSnackBarService.openError('telefone inválido.');
          return;
        }
    }

    if (this.fornecedor.celular) 
    {
        var numb = this.fornecedor.celular.match(/\d/g);
        numb = numb.join("").toString();

        if(numb.length != 14)
        {
          this.openSnackBarService.openError('celular inválido.');
          return;
        }
    }
    else
    {
      this.fornecedor.telefone = this.fornecedor.telefone.replace(/\.|-/gi, '');
      this.fornecedor.celular = this.fornecedor.celular.replace(/\.|-/gi, '');

    }

    if (this.fornecedor.senha && (this.fornecedor.senha != this.confSenha) )
    {
        this.openSnackBarService.openError('Confirmação de senha inválida');
        return;
    }

    if (!this.fornecedor.idFornecedor)
    {
      this.fornecedorService.insertFornecedor(this.fornecedor).subscribe(fornecedor =>
      {
        this.openSnackBarService.openSuccess("Fornecedor salvo");
        this.dialogRef.close(this.fornecedor);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.fornecedorService.updateFornecedor(this.fornecedor).subscribe(fornecedor =>
      {
        this.openSnackBarService.openSuccess("Fornecedor atualizado");
        this.dialogRef.close(this.fornecedor);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }



  private validaCNPJ(cnpj)
  {
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0,tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    let i ;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
     tamanho = tamanho + 1;
     numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}


}