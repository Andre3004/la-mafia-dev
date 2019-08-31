import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProdutoService, ArquivoService, GrupoProdutoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Produto, GrupoProduto } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit
{ 
  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/
  public title = "";

  public produto: Produto = {codigo: 0, currentEstoque:{}};

  public fotoImage: any;

  public gruposProdutos: GrupoProduto[];

  public textMasks = TextMasks;

  constructor(
    private produtoService: ProdutoService,
    private grupoProdutoService: GrupoProdutoService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<ProdutoFormComponent>,
    private arquivoService: ArquivoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.produtoId != null)
    {
      this.onFindProdutoById(data.produtoId);
    }

    this.onListGrupoProdutos("");
  }

  ngOnInit()
  {
    if (this.data.produtoId)
      this.title = "Alterar produto";
    else
      this.title = "Inserir produto";
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindProdutoById(produtoId: any)
  {
    this.produtoService.findProdutoById(produtoId).subscribe(produto =>
    {
      this.produto = produto;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    let anexoOld = null;

    if( !this.produto.grupoProduto || (this.produto.grupoProduto && !this.produto.grupoProduto.codigo))
    {
      this.openSnackBarService.openError("O campo grupo de produto deve ser selecionado.");
      return;
    }

    if(this.produto.anexo && typeof(this.produto.anexo) == 'string')
    {
      anexoOld = this.produto.anexo;
      this.produto.anexo = null;
    }

    if (!this.produto.codigo)
    {
      this.produtoService.insertProduto(this.produto).subscribe(produto =>
      {
        this.openSnackBarService.openSuccess("Produto salvo com sucesso.");
        this.dialogRef.close(this.produto);
      }, err => {
        
        if(anexoOld) this.produto.anexo = anexoOld;

        this.openSnackBarService.openError(err.message)

      })
    }
    else
    {
      this.produtoService.updateProduto(this.produto).subscribe(produto =>
      {
        this.openSnackBarService.openSuccess("Produto atualizado com sucesso.");
        this.dialogRef.close(this.produto);
      }, err => {
        if(anexoOld) this.produto.anexo = anexoOld;
        this.openSnackBarService.openError(err.message)
      })
    }

  }

  public onListGrupoProdutos(filter)
  {
    this.grupoProdutoService.listGrupoProdutosByFilters(filter ? filter : "", isNaN(filter) || filter == null || filter == "" ? null : parseInt(filter.substring(0,9)), null).subscribe( grupoProdutoPage => {
      this.gruposProdutos = grupoProdutoPage.content.filter( c => c.situacao); 
    })
  }

  public displayFn(grupoProduto?: GrupoProduto): string | undefined {
    return grupoProduto ?  grupoProduto.codigo +" - "+ grupoProduto.grupoProduto : undefined;
  }

  /*-------------------------------------------------------------------
  *                           FOTO
  *-------------------------------------------------------------------*/



  public removeAnexo()
  {
    this.produto.anexo = null;
    this.produto.anexoUuid = null;
    this.fotoImage = null;
    this.produto.nomeArquivo = null;
  }

  public downloadFile()
  {
    this.arquivoService.downloadArquivoByUuid(this.produto.anexoUuid).subscribe(result =>
    {
      window.location.href = result;
    }, (exception) => this.openSnackBarService.openError(exception.message))
  }

  public setProdutoAnexo(event)
  {
    if (event.target.files[0])
    {
      if (event.target.files[0].size <= 10000000) //10MB
      {
        this.produto.anexo = event.target;

        this.produto.nomeArquivo = event.target.files[0].name;

        let reader = new FileReader();

        reader.onload = (event: any) =>
        {
          this.fotoImage = event.target.result;
        };
        this.produto.anexoUuid = null;
        reader.readAsDataURL(event.target.files[0]);
      }
      else
      {
        this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
      }
    }
    else
    {
      this.produto.anexo = null;
    }
  }

}
