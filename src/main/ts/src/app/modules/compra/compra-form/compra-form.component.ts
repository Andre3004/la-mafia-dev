import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ArquivoService, AmbienteService, FornecedorService, ProdutoService, CondicaoPagamentoService, CompraService } from 'src/generated/services'; //CompraService
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Usuario, Compra, Fornecedor, Produto, CondicaoPagamento, ItemCompra } from 'src/generated/entities'; //Compra
import { TextMasks } from 'src/app/common/mask/text-masks';
import { PaginationService } from 'src/app/common/pagination/pagination.service';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra-form.component.html',
  styleUrls: ['./compra-form.component.scss']
})

export class CompraFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public compra: Compra = { itensCompra: [], contasAPagar: [], created: new Date() };//Compra = { numeroCompra: 0 };

  public textMasks = TextMasks;

  public usuarioAutenticado: Usuario = {};

  public fornecedores: Fornecedor[] = [];

  public produtos: Produto[] = [];

  public condicoesPagamentos: CondicaoPagamento[];

  public pageRequest: any = [];

  public itemCompra: ItemCompra = {};

  public masks = TextMasks;

  public isDetail : boolean = true;

  constructor(
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<CompraFormComponent>,
    private compraService: CompraService,
    private fornecedorService: FornecedorService,
    private produtoService: ProdutoService,
    private condicaoPagamentoService: CondicaoPagamentoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.isDetail != null)
    {
     this.isDetail = data.isDetail;
    }

    if (data.compra != null)
    {
      this.findCompraById(data.compra);
    }

  }

  ngOnInit()
  {
    if (this.data.isDetail)
      this.title = "Visualizar compra";
    else
      this.title = "Inserir compra";

    this.onListFornecedores("");
    this.onListProdutos("");
    this.onListCondicaoPagamentos(null);

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/


  public onSubmit(): void
  {


    this.compra.contasAPagar.forEach((conta, i) =>
    {
      conta.valorParcela = this.getValorParcela(i);
      conta.serie = this.compra.serie;
      conta.modelo = this.compra.modelo;
      conta.numeroNota = this.compra.numeroNota;
      conta.fornecedor = this.compra.fornecedor;
      conta.numero_parcela = i + 1;
    })

    console.log(this.compra)
    this.compraService.insertCompra(this.compra).subscribe(compra =>
    {
      this.openSnackBarService.openSuccess("Compra salva com sucesso.");
      this.dialogRef.close(this.compra);
    }, err =>
    {

      this.openSnackBarService.openError(err.message)

    })

  }

  public validForm(form)
  {
    return form.valid && this.compra.itensCompra.length && this.compra.contasAPagar.length;
  }

  public addItemCompra()
  {
    this.compra.itensCompra.push({ ...this.itemCompra });
    this.itemCompra = {};
  }

  public removeItemCompra(i)
  {
    this.compra.itensCompra.splice(i, 1);
  }

  private findCompraById(compra: Compra)
  {
    this.compraService.findCompraById(compra.modelo, compra.serie, compra.numeroNota, compra.fornecedor.idFornecedor)
    .subscribe(compra => {
      this.compra = compra;
    }, err => console.log(err))
  }

  /////////////////MODEL

  public onListCondicaoPagamentos(filter)
  {
    this.condicaoPagamentoService.listCondicaoPagamentosByFilters(filter ? parseInt(filter) : null, null).subscribe(page =>
    {
      this.condicoesPagamentos = page.content.filter(c => c.situacao);
    })
  }

  public displayFnCondicaoPagamento(condicaoPagamento?: CondicaoPagamento): number | undefined
  {
    return condicaoPagamento ? condicaoPagamento.codigo : undefined;
  }

  public onSelectCondicaoPagamento(condicaoPagamento: CondicaoPagamento)
  {
    this.compra.condicaoPagamento = condicaoPagamento;
    this.onListCondicaoPagamentos('');

    if (this.compra.condicaoPagamento.parcelas)
    {

      this.compra.condicaoPagamento.parcelas = this.compra.condicaoPagamento.parcelas.sort();

      console.log(this.compra.condicaoPagamento.parcelas)
      this.compra.contasAPagar = [];
      for (let i = 0; i < this.compra.condicaoPagamento.parcelas.length; i++) 
      {
        var dataVencimento = this.compra.created.setDate(this.compra.created.getDate() + this.compra.condicaoPagamento.parcelas[i].dias);
        this.compra.contasAPagar.push({ dataVencimento } as any) //completar isso com os atributos.
      }
    }
  }


  public onListFornecedores(filter)
  {
    this.fornecedorService.listFornecedorsByFilters(filter ? filter : "", null).subscribe(page =>
    {
      this.fornecedores = page.content.filter(c => c.situacao);
    })
  }

  public displayFnFornecedor(fornecedor?: Fornecedor): string | undefined
  {
    return fornecedor ? fornecedor.razaoSocial : undefined;
  }


  public onListProdutos(filter)
  {
    this.produtoService.listProdutosByFilters(filter ? filter : "", null).subscribe(page =>
    {
      this.produtos = page.content.filter(c => c.situacao);
    })
  }

  public displayFnProduto(produto?: Produto): string | undefined
  {
    return produto ? produto.produto : undefined;
  }

  public onSelectProduto(produto: Produto)
  {
    this.itemCompra = produto;
    this.itemCompra.valorUnitario = produto.currentEstoque.precoVenda;
    this.itemCompra.custoUnitario = produto.currentEstoque.precoCusto;
    this.onListProdutos('');
  }

  public getValorTotal(itemProduto: ItemCompra)
  {
    var valorTotal = this.getCustoUnitario(itemProduto) * itemProduto.quantidade;
    return isNaN(valorTotal) ? 0 : valorTotal;
  }

  public getCustoUnitario(itemCompra: ItemCompra)
  {
    var valorFinal = itemCompra.custoUnitario;


    if( this.compra.itensCompra.length > 0)
    {
      ///Soma o valor unitario de todos os itens da compra
      var total = this.compra.itensCompra.map(item => item.valorUnitario).reduce( (item1, item2) => item1 + item2);
  
      //Soma toda as despesas
      var totalDespesas = this.compra.frete + this.compra.despesa + this.compra.seguro; 
      
      //Pega a porcentagem que representa o valor unitario do item do produto referente ao total
      var porcentagemItem = itemCompra.valorUnitario / total;
  
      //Pega o valor total que o item vai ter de despesa
      var valorItems = totalDespesas * porcentagemItem;
  
      //Divide pela quantidade para saber o valor da despesa de um único item
      var valorItem = valorItems / itemCompra.quantidade;
  
      //Soma o valor do item e o custo unitario 
      valorFinal = valorItem + itemCompra.valorUnitario;
    }


    return isNaN(valorFinal) ? 0 : valorFinal;
  }

  get itemCompraIsValid()
  {
    if (!this.itemCompra.quantidade || !this.itemCompra.produto || !this.itemCompra.valorUnitario)
      return false;

    return true;
  }

  get getValorTotalCompra()
  {
    var valorTotalCompra = 0;

    this.compra.itensCompra.forEach(itemCompra =>
    {
      valorTotalCompra += this.getValorTotal(itemCompra);
    })

    return valorTotalCompra || 0;
  }

  public getNumeroDocumento(i)
  {
    // modelo/serie/numero/numeroParcela
    return `${this.compra.modelo}.${this.compra.serie}.${this.compra.numeroNota}/${this.compra.condicaoPagamento.parcelas[i].parcela}`
  }

  public getValorParcela(i)
  {
    return this.getValorTotalCompra * (this.compra.condicaoPagamento.parcelas[i].porcentagem / 100);
  }
}
