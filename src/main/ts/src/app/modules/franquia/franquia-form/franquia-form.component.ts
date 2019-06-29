import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FranquiaService, ArquivoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Franquia } from 'src/generated/entities';

@Component({
  selector: 'app-franquia-form',
  templateUrl: './franquia-form.component.html',
  styleUrls: ['./franquia-form.component.scss']
})
export class FranquiaFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public franquia: Franquia = {};

  public maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  public fotoImage: any;

  constructor(
    private franquiaService: FranquiaService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<FranquiaFormComponent>,
    private arquivoService: ArquivoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.franquiaId != null)
    {
      this.onFindFranquiaById(data.franquiaId);
    }
  }

  ngOnInit()
  {
    if (this.data.franquiaId)
      this.title = "Alterar franquia";
    else
      this.title = "Inserir franquia";
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindFranquiaById(franquiaId: any)
  {
    this.franquiaService.findFranquiaById(franquiaId).subscribe(franquia =>
    {
      this.franquia = franquia;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    if (this.franquia.cnpj && !this.validarCNPJ(this.franquia.cnpj))
    {
        this.openSnackBarService.openError('O campo CNPJ está inválido.')
        return;
    }

    let anexoOld = null;

    if(this.franquia.anexo && typeof(this.franquia.anexo) == 'string')
    {
      anexoOld = this.franquia.anexo;
      this.franquia.anexo = null;
    }

    if (!this.franquia.id)
    {
      this.franquiaService.insertFranquia(this.franquia).subscribe(franquia =>
      {
        this.openSnackBarService.openSuccess("Franquia salvo com sucesso.");
        this.dialogRef.close(this.franquia);
      }, err => {
        
        if(anexoOld) this.franquia.anexo = anexoOld;

        this.openSnackBarService.openError(err.message)

      })
    }
    else
    {
      this.franquiaService.updateFranquia(this.franquia).subscribe(franquia =>
      {
        this.openSnackBarService.openSuccess("Franquia atualizado com sucesso.");
        this.dialogRef.close(this.franquia);
      }, err => {
        if(anexoOld) this.franquia.anexo = anexoOld;
        this.openSnackBarService.openError(err.message)
      })
    }

  }

  /*-------------------------------------------------------------------
  *                           FOTO
  *-------------------------------------------------------------------*/



  public removeAnexo()
  {
    this.franquia.anexo = null;
    this.franquia.anexoUuid = null;
    this.fotoImage = null;
    this.franquia.nomeArquivo = null;
  }

  public downloadFile()
  {
    this.arquivoService.downloadArquivoByUuid(this.franquia.anexoUuid).subscribe(result =>
    {
      window.location.href = result;
    }, (exception) => this.openSnackBarService.openError(exception.message))
  }

  public setFranquiaAnexo(event)
  {
    if (event.target.files[0])
    {
      if (event.target.files[0].size <= 10000000) //10MB
      {
        this.franquia.anexo = event.target;

        this.franquia.nomeArquivo = event.target.files[0].name;

        let reader = new FileReader();

        reader.onload = (event: any) =>
        {
          this.fotoImage = event.target.result;
        };
        this.franquia.anexoUuid = null;
        reader.readAsDataURL(event.target.files[0]);
      }
      else
      {
        this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
      }
    }
    else
    {
      this.franquia.anexo = null;
    }
  }


      /**
    * Método para validar o cnpj
    * @param cnpj
    */
   public validarCNPJ(cnpj)
   {

       cnpj = cnpj.replace(/[^\d]+/g, '');

       if (cnpj == '') return false;

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
       var tamanho = cnpj.length - 2
       var numeros = cnpj.substring(0, tamanho);
       var digitos = cnpj.substring(tamanho);
       var soma = 0;
       var pos = tamanho - 7;
       for (let i = tamanho; i >= 1; i--)
       {
           soma += numeros.charAt(tamanho - i) * pos--;
           if (pos < 2)
               pos = 9;
       }
       resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
       if (resultado != digitos.charAt(0))
           return false;

       tamanho = tamanho + 1;
       numeros = cnpj.substring(0, tamanho);
       soma = 0;
       pos = tamanho - 7;
       for (let i = tamanho; i >= 1; i--)
       {
           soma += numeros.charAt(tamanho - i) * pos--;
           if (pos < 2)
               pos = 9;
       }
       var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
       if (resultado != digitos.charAt(1))
           return false;

       return true;

   }

}
