import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GrupoProdutoService, ArquivoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { GrupoProduto } from 'src/generated/entities';

@Component({
  selector: 'app-grupo-produto-form',
  templateUrl: './grupo-produto-form.component.html',
  styleUrls: ['./grupo-produto-form.component.scss']
})
export class GrupoProdutoFormComponent implements OnInit
{ 
  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public grupoProduto: GrupoProduto = { codigo:0, exigeAno: false };

  public fotoImage: any;

  constructor(
    private grupoProdutoService: GrupoProdutoService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<GrupoProdutoFormComponent>,
    private arquivoService: ArquivoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.grupoProdutoId != null)
    {
      this.onFindGrupoProdutoById(data.grupoProdutoId);
    }

  }

  ngOnInit()
  {
    if (this.data.grupoProdutoId)
      this.title = "Alterar grupo de produto";
    else
      this.title = "Inserir grupo de produto";
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindGrupoProdutoById(grupoProdutoId: any)
  {
    this.grupoProdutoService.findGrupoProdutoById(grupoProdutoId).subscribe(grupoProduto =>
    {
      this.grupoProduto = grupoProduto;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(form): void
  {

    if(form.invalid){
      this.openSnackBarService.openError(`Todos os campos com * devem ser preenchidos.`);
      return;
    }

    let anexoOld = null;

    if(this.grupoProduto.anexo && typeof(this.grupoProduto.anexo) == 'string')
    {
      anexoOld = this.grupoProduto.anexo;
      this.grupoProduto.anexo = null;
    }

    if (!this.grupoProduto.codigo)
    {
      this.grupoProdutoService.insertGrupoProduto(this.grupoProduto).subscribe(grupoProduto =>
      {
        this.openSnackBarService.openSuccess("Grupo de produto salvo com sucesso.");
        this.dialogRef.close(this.grupoProduto);
      }, err => {
        
        if(anexoOld) this.grupoProduto.anexo = anexoOld;

        this.openSnackBarService.openError(err.message)

      })
    }
    else
    {
      this.grupoProdutoService.updateGrupoProduto(this.grupoProduto).subscribe(grupoProduto =>
      {
        this.openSnackBarService.openSuccess("Grupo de produto atualizado com sucesso.");
        this.dialogRef.close(this.grupoProduto);
      }, err => {
        if(anexoOld) this.grupoProduto.anexo = anexoOld;
        this.openSnackBarService.openError(err.message)
      })
    }

  }

  /*-------------------------------------------------------------------
  *                           FOTO
  *-------------------------------------------------------------------*/



  public removeAnexo()
  {
    this.grupoProduto.anexo = null;
    this.grupoProduto.anexoUuid = null;
    this.fotoImage = null;
    this.grupoProduto.nomeArquivo = null;
  }

  public downloadFile()
  {
    this.arquivoService.downloadArquivoByUuid(this.grupoProduto.anexoUuid).subscribe(result =>
    {
      window.location.href = result;
    }, (exception) => this.openSnackBarService.openError(exception.message))
  }

  public setGrupoProdutoAnexo(event)
  {
    if (event.target.files[0])
    {
      if (event.target.files[0].size <= 10000000) //10MB
      {
        this.grupoProduto.anexo = event.target;

        this.grupoProduto.nomeArquivo = event.target.files[0].name;

        let reader = new FileReader();

        reader.onload = (event: any) =>
        {
          this.fotoImage = event.target.result;
        };
        this.grupoProduto.anexoUuid = null;
        reader.readAsDataURL(event.target.files[0]);
      }
      else
      {
        this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
      }
    }
    else
    {
      this.grupoProduto.anexo = null;
    }
  }

}
