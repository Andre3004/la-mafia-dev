import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GrupoProdutoService, ArquivoService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { GrupoProduto, Franquia } from 'src/generated/entities';

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

  public grupoProduto: GrupoProduto = { codigo:0, exigeAno: false, grupoProdutoFranquia: [] };

  public grupoProdutoFranquiasToRemoved = [];

  public fotoImage: any;

  public franquias: Franquia[];

  constructor(
    private grupoProdutoService: GrupoProdutoService,
    private franquiaService: FranquiaService,
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

    this.onListFranquias("");
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

  public onSubmit(): void
  {

    let anexoOld = null;

    if( !this.grupoProduto.grupoProdutoFranquia || (this.grupoProduto.grupoProdutoFranquia && !this.grupoProduto.grupoProdutoFranquia.length))
    {
      this.openSnackBarService.openError("É necessário adicionar ao menos uma franquia.");
      return;
    }
    else
      this.grupoProduto.grupoProdutoFranquia = this.grupoProduto.grupoProdutoFranquia.filter( gp => gp.franquia);

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
      this.grupoProdutoService.updateGrupoProduto(this.grupoProduto, this.grupoProdutoFranquiasToRemoved).subscribe(grupoProduto =>
      {
        this.openSnackBarService.openSuccess("Grupo de produto atualizado com sucesso.");
        this.dialogRef.close(this.grupoProduto);
      }, err => {
        if(anexoOld) this.grupoProduto.anexo = anexoOld;
        this.openSnackBarService.openError(err.message)
      })
    }

  }

  public onListFranquias(filter)
  {
    this.franquiaService.listFranquiasByFilters(filter ? filter : "", "", null).subscribe( franquiaPage => {
      this.franquias = franquiaPage.content.filter( c => c.situacao); 
    })
  }

  public displayFn(franquia?: Franquia): string | undefined {
    return franquia ? `${franquia.codigo} - ${franquia.franquia}` : undefined;
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



   /*-------------------------------------------------------------------
  *                           Franquias
  *-------------------------------------------------------------------*/

 public redirect()
 {
   var win = window.open(`http://localhost:4200/#/franquia`, '_blank');
   win.focus();
 }


 
 public addFranquia()
 {
   this.grupoProduto.grupoProdutoFranquia.push({});
 }

 public removeFranquia(index)
 {
   if(this.grupoProduto.grupoProdutoFranquia[index].created)
       this.grupoProdutoFranquiasToRemoved.push(this.grupoProduto.grupoProdutoFranquia[index].franquia.codigo)

   this.grupoProduto.grupoProdutoFranquia.splice(index, 1);
 }

}
