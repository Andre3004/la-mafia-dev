import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
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

  public compra: Compra = { condicaoPagamento: {}, itensCompra: [], contasAPagar: [], created: new Date(), frete: 0, seguro: 0, despesa: 0 };//Compra = { numeroCompra: 0 };

  public textMasks = TextMasks;

  public usuarioAutenticado: Usuario = {};

  public fornecedores: Fornecedor[] = [];

  public produtos: Produto[] = [];

  public condicoesPagamentos: CondicaoPagamento[];

  public pageRequest: any = [];

  public itemCompra: ItemCompra = {};

  public masks = TextMasks;

  public isDetail: boolean = false;

  public dataHoje = new Date();

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


  public onSubmit(form): void
  {
    

    var valid = this.validForm(form);

    if(!valid) return;

    this.compra.serie = this.compra.serie.trim(); 
    this.compra.numeroNota = this.compra.numeroNota.trim(); 
    this.compra.modelo = this.compra.modelo.trim(); 
    
    this.compra.contasAPagar.forEach((conta, i) =>
    {
      conta.serie = this.compra.serie;
      conta.modelo = this.compra.modelo;
      conta.numeroNota = this.compra.numeroNota;
      conta.fornecedor = this.compra.fornecedor;
      conta.numeroParcela = i + 1;
    })

    this.compra.itensCompra.forEach((itemCompra, i) =>
    {
      itemCompra.custoUnitario = itemCompra.valorUnitario + this.getValorRateio(itemCompra); // TODO validar valor de rateio
    })

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
    if(form.invalid || !this.compra.dataEmissao || !this.compra.dataChegada || !this.compra.fornecedor)
    {
      this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
      return false;
    } 
    else if ( !this.compra.itensCompra.length )
    {
      this.openSnackBarService.openError("É necessário adicionar ao menos um item na compra.");
      return false;
    }
    else if ( !this.compra.contasAPagar.length )
    {
      this.openSnackBarService.openError("É necessário adicionar ao menos um conta á pagar.");
      return false;
    }
    
    return true;
  }

  public addItemCompra()
  {
    this.compra.itensCompra.push({ ...this.itemCompra });
    this.itemCompra = {};
    this.onListProdutos("");
  }

  public removeItemCompra(i)
  {
    this.compra.itensCompra.splice(i, 1);
  }

  private findCompraById(compra: Compra)
  {
    this.compraService.findCompraById(compra.modelo, compra.serie, compra.numeroNota, compra.fornecedor.codigo)
      .subscribe(compra =>
      {
        this.compra = compra;
      }, err => console.log(err))
  }

  /////////////////MODEL

  public onListCondicaoPagamentos(filter)
  {
    var codigo = null;
    var condicaoPagamento = "";

    if(isNaN(parseInt(filter))) condicaoPagamento = filter ? filter : "";
    else codigo = parseInt(filter)

    this.condicaoPagamentoService.listCondicaoPagamentosByFilters(codigo, condicaoPagamento, null).subscribe(page =>
    {
      this.condicoesPagamentos = page.content.filter(c => c.situacao);
    })
  }

  public displayFnCondicaoPagamento(condicaoPagamento?: CondicaoPagamento): number | undefined
  {
    return condicaoPagamento ? condicaoPagamento.codigo : undefined;
  }

  public onSelectFornecedor(fornecedor: Fornecedor){
    this.compra.fornecedor = fornecedor;
  }

  public onClickContasAPagar(tab){
    if(tab.index == 2 && this.compra.fornecedor && this.compra.fornecedor.condicaoPagamento)
    {
      this.onSelectCondicaoPagamento(this.compra.fornecedor.condicaoPagamento);
    }
  }

  public onSelectCondicaoPagamento(condicaoPagamento: CondicaoPagamento)
  {
    this.compra.condicaoPagamento = condicaoPagamento;
    this.onListCondicaoPagamentos('');
    

    if (this.compra.condicaoPagamento.parcelas)
    {

      this.compra.condicaoPagamento.parcelas = this.compra.condicaoPagamento.parcelas.sort();

      this.compra.contasAPagar = [];
      for (let i = 0; i < this.compra.condicaoPagamento.parcelas.length; i++) 
      {
        var dateNow = new Date();
        var parcela = this.compra.condicaoPagamento.parcelas[i];
        dateNow.setHours(0)
        dateNow.setMinutes(0);


        var dataVencimento = dateNow.setDate(dateNow.getDate() + parcela.dias);
        this.compra.contasAPagar.push({ 
            dataVencimento, 
            formaPagamento: parcela.formaPagamento,
            juros: this.compra.condicaoPagamento.juros,
            multa: this.compra.condicaoPagamento.multa,
            desconto: this.compra.condicaoPagamento.desconto } as any) 
      }

      for (let i = 0; i < this.compra.contasAPagar.length - 1; i++)
      {
        const contaAPagar = this.compra.contasAPagar[i];
        contaAPagar.valorParcela = parseFloat(this.getValorParcela(i));
      }

      this.compra.contasAPagar[this.compra.contasAPagar.length - 1].valorParcela = (this.getValorTotalCompra + this.compra.despesa + this.compra.frete + this.compra.seguro) - this.compra.contasAPagar.map(c => c.valorParcela)
        .reduce((total, currentValue) =>
        {
          if(currentValue)
            total += currentValue;
          return total;
        }, 0);
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
    var codigo = null;
    var produto = "";

    if(isNaN(parseInt(filter))) produto = filter ? filter : "";
    else codigo = parseInt(filter)

    this.produtoService.listProdutosByFiltersToAssociation(produto, codigo, null).subscribe(page =>
    {
      this.produtos = page.content.filter(c => c.situacao).filter(c => !this.compra.itensCompra.map(i => i.codigo).includes(c.codigo));
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
    this.onListProdutos('');
  }

  public getValorTotal(itemProduto: ItemCompra)
  {
    var valorTotal = itemProduto.valorUnitario * itemProduto.quantidade;
    return isNaN(valorTotal) ? 0 : valorTotal;
  }


  public getValorRateio(itemCompra: ItemCompra)
  {
    var valorFinal = 0;


    if (this.compra.itensCompra.length > 0)
    {

      ///Soma o valor unitario de todos os itens da compra
      var total = this.compra.itensCompra.map(item => item.valorUnitario * item.quantidade).reduce((item1, item2) => item1 + item2);

      //Soma toda as despesas
      var totalDespesas = this.compra.frete + this.compra.despesa + this.compra.seguro;

      //Pega a porcentagem que representa o valor unitario do item do produto referente ao total
      var porcentagemItem = (itemCompra.valorUnitario * itemCompra.quantidade) / total;

      //Pega o valor total que o item vai ter de despesa
      valorFinal = totalDespesas * porcentagemItem;

      valorFinal /= itemCompra.quantidade;
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

  get getValorTotalNota()
  {
    return this.getValorTotalCompra + this.compra.despesa + this.compra.frete + this.compra.seguro;
  }

  public getNumeroDocumento(i)
  {
    // modelo/serie/numero/numeroParcela
    return `${this.compra.modelo}.${this.compra.serie}.${this.compra.numeroNota}/${this.compra.condicaoPagamento.parcelas[i].parcela}`
  }

  public getValorParcela(i)
  {
    return ((this.getValorTotalCompra + this.compra.frete + this.compra.despesa + this.compra.seguro) * (this.compra.condicaoPagamento.parcelas[i].porcentagem / 100)).toFixed(2);
  }

  public onChangeTipoFrete()
  {
    if(this.compra.tipoFrete == 'PAGO_PELO_FORNECEDOR')
    {
      this.compra.frete =  0;
      this.compra.seguro = 0;
      this.compra.despesa = 0;
    }

  }
}
