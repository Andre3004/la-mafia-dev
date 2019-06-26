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
    if (this.franquia.id)
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
    if (!this.franquia.id)
    {
      this.franquiaService.insertFranquia(this.franquia).subscribe(franquia =>
      {
        this.openSnackBarService.openSuccess("Franquia salvo com sucesso.");
        this.dialogRef.close(this.franquia);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.franquiaService.updateFranquia(this.franquia).subscribe(franquia =>
      {
        this.openSnackBarService.openSuccess("Franquia atualizado com sucesso.");
        this.dialogRef.close(this.franquia);
      }, err => this.openSnackBarService.openError(err.message))
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

}
