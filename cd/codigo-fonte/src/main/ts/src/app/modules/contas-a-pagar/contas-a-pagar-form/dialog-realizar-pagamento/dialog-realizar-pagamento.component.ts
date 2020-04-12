import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContasAPagar } from 'src/generated/entities';
import { ContasAPagarService } from 'src/generated/services';

@Component({
  templateUrl: './dialog-realizar-pagamento.component.html'
})
export class DialogRealizarPagamentoComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public dataHoje = new Date();

  public contaAPagar : ContasAPagar;

  constructor(
    public dialogRef: MatDialogRef<DialogRealizarPagamentoComponent>,
    public contasAPagarService: ContasAPagarService, 
    @Inject(MAT_DIALOG_DATA) public data: ContasAPagar
  )
  {
    this.contaAPagar = data;
    this.findContaAPagarById(this.contaAPagar);
  }

  ngOnInit()
  {
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  async findContaAPagarById(contaAPagar: ContasAPagar){
    this.contaAPagar = await this.contasAPagarService.findContaAPagar(contaAPagar.modelo, contaAPagar.serie, contaAPagar.numeroNota, contaAPagar.fornecedor.codigo, contaAPagar.numeroParcela).toPromise();
  
  }

  get valorPago(){

    if( this.contaAPagar.dataVencimento && this.contaAPagar.dataPagamento)
    {
      var desconto = this.contaAPagar.desconto ? this.contaAPagar.desconto : 0;
      var juros = this.contaAPagar.juros ? this.contaAPagar.juros : 0;
      var multa = this.contaAPagar.multa ? this.contaAPagar.multa : 0;
  
      var valorDesconto = this.contaAPagar.valorParcela * (desconto / 100);
      var valorJuros = this.contaAPagar.valorParcela * (juros / 100);
      var valorMulta = this.contaAPagar.valorParcela * (multa / 100);
  
      this.contaAPagar.dataPagamento.setHours(0, 0, 0, 0);
      this.contaAPagar.dataVencimento.setHours(0, 0, 0, 0);
  
      this.contaAPagar.valorPago = 0;
  
      if (this.contaAPagar.dataPagamento < this.contaAPagar.dataVencimento)
      {
        this.contaAPagar.valorPago = this.contaAPagar.valorParcela - valorDesconto;
      } else if (this.contaAPagar.dataPagamento > this.contaAPagar.dataVencimento)
      {
        this.contaAPagar.valorPago = this.contaAPagar.valorParcela + valorMulta + valorJuros;
      }else{
        this.contaAPagar.valorPago = this.contaAPagar.valorParcela;

      }
  
      return this.contaAPagar.valorPago;
    }

    return 0;
  }

}
