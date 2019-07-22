import { Cliente, Cidade, Estado, Pais } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClienteService, CidadeService, EstadoService, PaisService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public cliente: Cliente = { idCliente: 0 };

  public maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  public maskTelefone = ['+', /\d/, /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', ' ', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public maskCelular = ['+', /\d/, /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public cidades: Cidade[];

  constructor(
    private clienteService: ClienteService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<ClienteFormComponent>,
    private cidadeService: CidadeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.idCliente != null)
    {
      this.onFindClienteById(data.idCliente);
    }

    this.onListCidades("");

  }

  ngOnInit()
  {
    if (this.data.idCliente)
      this.title = "Alterar cliente";
    else
      this.title = "Inserir cliente";

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindClienteById(id: any)
  {
    this.clienteService.findClienteById(id).subscribe(cliente =>
    {
      this.cliente = cliente;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    if (!this.cliente.cidade)
    {
      this.openSnackBarService.openError('O campo cidade deve ser preenchido.');
      return;
    }

    this.cliente.estado = this.cliente.cidade.estado;
    this.cliente.pais = this.cliente.cidade.estado.pais;

    if (typeof this.cliente.cpf == "string")
    {
      this.cliente.cpf = this.cliente.cpf.replace(/\.|-/gi, '');

      if (!this.validaCPF(this.cliente.cpf))
      {
        this.openSnackBarService.openError('CPF inválido.');
        return;
      }
    }

    if (this.cliente.telefone)
    {
      var numb = this.cliente.telefone.match(/\d/g) as any;
      numb = numb.join("").toString();

      if (numb.length != 13)
      {
        this.openSnackBarService.openError('telefone inválido.');
        return;
      }
    }

    if (this.cliente.celular) 
    {
      var numb = this.cliente.celular.match(/\d/g) as any;
      numb = numb.join("").toString();

      if (numb.length != 14)
      {
        this.openSnackBarService.openError('celular inválido.');
        return;
      }
    }
    else
    {
      this.cliente.telefone = this.cliente.telefone.replace(/\.|-/gi, '');
      this.cliente.celular = this.cliente.celular.replace(/\.|-/gi, '');

    }

    if (!this.cliente.idCliente)
    {
      this.clienteService.insertCliente(this.cliente).subscribe(cliente =>
      {
        this.openSnackBarService.openSuccess("Cliente salvo");
        this.dialogRef.close(this.cliente);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.clienteService.updateCliente(this.cliente).subscribe(cliente =>
      {
        this.openSnackBarService.openSuccess("Cliente atualizado");
        this.dialogRef.close(this.cliente);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }



  private validaCPF(cpf)
  {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }


  public onListCidades(filter)
  {
    this.cidadeService.listCidadesByFilters(filter ? filter : "", null).subscribe(page =>
    {

      this.cidades = page.content.filter(c => c.situacao);
    })
  }

  public displayFnCidade(cidade?: Cidade): string | undefined
  {
    return cidade ? cidade.cidade : undefined;
  }

}
