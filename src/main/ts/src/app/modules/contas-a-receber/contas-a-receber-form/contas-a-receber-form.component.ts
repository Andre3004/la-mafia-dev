import { ContasAReceber, Cidade, Estado, Pais, Cliente, FormaPagamento } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContasAReceberService, CidadeService, EstadoService, PaisService, ClienteService, FormaPagamentoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';

@Component({
  selector: 'app-contas-a-receber-form',
  templateUrl: './contas-a-receber-form.component.html',
  styleUrls: ['./contas-a-receber-form.component.scss']
})
export class ContasAReceberFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public contaAReceber: ContasAReceber = {isAvulso: true};

  public clientes: Cliente[] = [];

  public formasPagamentos: FormaPagamento[] = [];

  public dataHoje = new Date();


  constructor(
    private contasAReceberService: ContasAReceberService,
    private openSnackBarService: OpenSnackBarService,
    private clienteService: ClienteService,
    private formaPagamentoService: FormaPagamentoService,
    public dialogRef: MatDialogRef<ContasAReceberFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.contasAReceber != null)
    {
      this.onFindContasAReceberById(data.contasAReceber);
    }

  }

  ngOnInit()
  {
    if (this.data.contasAReceber && !this.data.contasAReceber.situacaoLiquidez)
      this.title = "Alterar contas á receber";
    else if (this.data.contasAReceber && this.data.contasAReceber.situacaoLiquidez)
      this.title = "Visualizar contas á receber";
    else
      this.title = "Inserir contas á receber";

    this.onListClientes("");
    this.onListFormasPagamentos("");

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindContasAReceberById(contaAReceber: ContasAReceber)
  {
    this.contasAReceberService.findContaAReceber(contaAReceber.modelo, contaAReceber.serie, contaAReceber.numeroNota, contaAReceber.cliente.codigo, contaAReceber.numeroParcela).subscribe(entity =>
    {
      this.contaAReceber = entity;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {
    if(!this.contaAReceber.created)
    {
      this.contasAReceberService.insertContaAReceber(this.contaAReceber).subscribe( result => {
        this.openSnackBarService.openSuccess("Conta á receber salva com sucesso.");
        this.dialogRef.close(this.contaAReceber);
      }, err => this.openSnackBarService.openError(err.message));
    }
    else{
      this.contasAReceberService.updateContaAReceber(this.contaAReceber).subscribe( result => {
        this.openSnackBarService.openSuccess("Conta á receber atualizada com sucesso.");
        this.dialogRef.close(this.contaAReceber);
      }, err => this.openSnackBarService.openError(err.message));
    }

  }


  ///////////MODAL

  public onListClientes(filter)
  {
    this.clienteService.listClientesByFilters(filter ? filter : "", null).subscribe(page =>
    {
      this.clientes = page.content.filter(c => c.situacao);
    })
  }

  public onListFormasPagamentos(filter)
  {
    this.formaPagamentoService.listFormaPagamentoByFilters(filter ? filter : "", null).subscribe(page =>
    {
      this.formasPagamentos = page.content.filter(c => c.situacao);
    })
  }

  public displayFnCliente(cliente?: Cliente): string | undefined
  {
    return cliente ? cliente.cliente : undefined;
  }
}
