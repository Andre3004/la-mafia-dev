import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ArquivoService, AmbienteService, ClienteService, ProdutoService, CondicaoPagamentoService, VendaService } from 'src/generated/services'; //VendaService
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Usuario, Venda, Cliente, Produto, CondicaoPagamento, ItemVenda } from 'src/generated/entities'; //Venda
import { TextMasks } from 'src/app/common/mask/text-masks';
import { PaginationService } from 'src/app/common/pagination/pagination.service';

@Component({
  selector: 'app-venda-form',
  templateUrl: './venda-form.component.html',
  styleUrls: ['./venda-form.component.scss']
})

export class VendaFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public venda: Venda = { condicaoPagamento: {}, itensVenda: [], contasAReceber: [], dataEmissao: new Date() };

  public textMasks = TextMasks;

  public usuarioAutenticado: Usuario = {};

  public clientes: Cliente[] = [];

  public produtos: Produto[] = [];

  public condicoesPagamentos: CondicaoPagamento[];

  public pageRequest: any = [];

  public itemVenda: ItemVenda = {};

  public masks = TextMasks;

  public isDetail: boolean = false;

  public dataHoje = new Date();

  constructor(
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<VendaFormComponent>,
    private vendaService: VendaService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private condicaoPagamentoService: CondicaoPagamentoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.isDetail != null)
    {
      this.isDetail = data.isDetail;
    }

    if (data.venda != null)
    {
      this.findVendaById(data.venda);
    }

  }

  ngOnInit()
  {
    if (this.data.isDetail)
      this.title = "Visualizar venda";
    else
      this.title = "Inserir venda";

    this.onListClientes("");
    this.onListProdutos("");
    this.onListCondicaoPagamentos(null);

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/


  public onSubmit(): void
  {
    this.venda.serie = this.venda.serie.trim(); 
    this.venda.numeroNota = this.venda.numeroNota.trim(); 
    this.venda.modelo = this.venda.modelo.trim(); 
    
    this.venda.contasAReceber.forEach((conta, i) =>
    {
      conta.serie = this.venda.serie;
      conta.modelo = this.venda.modelo;
      conta.numeroNota = this.venda.numeroNota;
      conta.cliente = this.venda.cliente;
      conta.numeroParcela = i + 1;
    })

    this.vendaService.insertVenda(this.venda).subscribe(venda =>
    {
      this.openSnackBarService.openSuccess("Venda salva com sucesso.");
      this.dialogRef.close(this.venda);
    }, err =>
    {
      this.openSnackBarService.openError(err.message)
    })

  }

  public validForm(form)
  {
    return !form.invalid && this.venda.itensVenda.length && this.venda.contasAReceber.length;
  }

  public addItemVenda()
  {
    this.venda.itensVenda.push({ ...this.itemVenda });
    this.itemVenda = {};
    this.onListProdutos("");
  }

  public removeItemVenda(i)
  {
    this.venda.itensVenda.splice(i, 1);
  }

  private findVendaById(venda: Venda)
  {
    this.vendaService.findVendaById(venda.modelo, venda.serie, venda.numeroNota, venda.cliente.codigo)
      .subscribe(venda =>
      {
        this.venda = venda;
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

  public onSelectCondicaoPagamento(condicaoPagamento: CondicaoPagamento)
  {
    this.venda.condicaoPagamento = condicaoPagamento;
    this.onListCondicaoPagamentos('');

    if (this.venda.condicaoPagamento.parcelas)
    {

      this.venda.condicaoPagamento.parcelas = this.venda.condicaoPagamento.parcelas.sort();

      this.venda.contasAReceber = [];
      for (let i = 0; i < this.venda.condicaoPagamento.parcelas.length; i++) 
      {
        var dateNow = new Date();
        var parcela = this.venda.condicaoPagamento.parcelas[i];
        dateNow.setHours(0)
        dateNow.setMinutes(0);


        var dataVencimento = dateNow.setDate(dateNow.getDate() + parcela.dias);
        this.venda.contasAReceber.push({ dataVencimento, formaPagamento: parcela.formaPagamento } as any) //completar isso com os atributos.
      }

      for (let i = 0; i < this.venda.contasAReceber.length - 1; i++)
      {
        const contaAPagar = this.venda.contasAReceber[i];
        contaAPagar.valorParcela = parseFloat(this.getValorParcela(i));
      }

      this.venda.contasAReceber[this.venda.contasAReceber.length - 1].valorParcela = this.getValorTotalVenda - this.venda.contasAReceber.map(c => c.valorParcela)
        .reduce((total, currentValue) =>
        {
          if(currentValue)
            total += currentValue;
          return total;
        }, 0);
    }
  }


  public onListClientes(filter)
  {
    this.clienteService.listClientesByFilters(filter ? filter : "", null).subscribe(page =>
    {
      this.clientes = page.content.filter(c => c.situacao);
    })
  }

  public displayFnCliente(cliente?: Cliente): string | undefined
  {
    return cliente ? cliente.cliente : undefined;
  }


  public onListProdutos(filter)
  {
    var codigo = null;
    var produto = "";

    if(isNaN(parseInt(filter))) produto = filter ? filter : "";
    else codigo = parseInt(filter)

    this.produtoService.listProdutosByFiltersToAssociation(produto, codigo, null).subscribe(page =>
    {
      this.produtos = page.content.filter(c => c.situacao).filter(c => !this.venda.itensVenda.map(i => i.codigo).includes(c.codigo));
    })
  }

  public displayFnProduto(produto?: Produto): string | undefined
  {
    return produto ? produto.produto : undefined;
  }

  public onSelectProduto(produto: Produto)
  {
    this.itemVenda = produto;
    this.itemVenda.valorVenda = produto.currentEstoque.precoVenda;
    this.onListProdutos('');
  }

  public getValorTotal(itemProduto: ItemVenda)
  {
    var valorTotal = itemProduto.valorVenda * itemProduto.quantidade;
    return isNaN(valorTotal) ? 0 : valorTotal;
  }

  get itemVendaIsValid()
  {
    if (!this.itemVenda.quantidade || !this.itemVenda.produto || !this.itemVenda.valorVenda)
      return false;

    return true;
  }

  get getValorTotalVenda()
  {
    var valorTotalVenda = 0;

    this.venda.itensVenda.forEach(itemVenda =>
    {
      valorTotalVenda += this.getValorTotal(itemVenda);
    })

    return valorTotalVenda || 0;
  }

  get getValorTotalNota()
  {
    return this.getValorTotalVenda;
  }

  public getNumeroDocumento(i)
  {
    // modelo/serie/numero/numeroParcela
    return `${this.venda.modelo}.${this.venda.serie}.${this.venda.numeroNota}/${this.venda.condicaoPagamento.parcelas[i].parcela}`
  }

  public getValorParcela(i)
  {
    return (this.getValorTotalVenda * (this.venda.condicaoPagamento.parcelas[i].porcentagem / 100)).toFixed(2);
  }

}
