import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContasAReceber } from 'src/generated/entities';
import { ContasAReceberService } from 'src/generated/services';

@Component({
  templateUrl: './dialog-realizar-recebimento.component.html'
})
export class DialogRealizarRecebimentoComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public dataHoje = new Date();

  public contaAReceber : ContasAReceber;

  constructor(
    public dialogRef: MatDialogRef<DialogRealizarRecebimentoComponent>,
    public contasAReceberService: ContasAReceberService, 
    @Inject(MAT_DIALOG_DATA) public data: ContasAReceber
  )
  {
    this.contaAReceber = data;
    this.findContaAReceberById(this.contaAReceber);
  }

  ngOnInit()
  {
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  async findContaAReceberById(contaAReceber: ContasAReceber){
    this.contaAReceber = await this.contasAReceberService.findContaAReceber(contaAReceber.modelo, contaAReceber.serie, contaAReceber.numeroNota, contaAReceber.cliente.codigo, contaAReceber.numeroParcela).toPromise();
  }

  get valorRecebido(){

    if( this.contaAReceber.dataVencimento && this.contaAReceber.dataRecebimento)
    {
      var desconto = this.contaAReceber.desconto ? this.contaAReceber.desconto : 0;
      var juros = this.contaAReceber.juros ? this.contaAReceber.juros : 0;
      var multa = this.contaAReceber.multa ? this.contaAReceber.multa : 0;
  
      var valorDesconto = this.contaAReceber.valorParcela * (desconto / 100);
      var valorJuros = this.contaAReceber.valorParcela * (juros / 100);
      var valorMulta = this.contaAReceber.valorParcela * (multa / 100);
  
      this.contaAReceber.dataRecebimento.setHours(0, 0, 0, 0);
      this.contaAReceber.dataVencimento.setHours(0, 0, 0, 0);
  
      this.contaAReceber.valorRecebido = 0;
  
      if (this.contaAReceber.dataRecebimento < this.contaAReceber.dataVencimento)
      {
        this.contaAReceber.valorRecebido = this.contaAReceber.valorParcela - valorDesconto;
      } else if (this.contaAReceber.dataRecebimento > this.contaAReceber.dataVencimento)
      {
        this.contaAReceber.valorRecebido = this.contaAReceber.valorParcela + valorMulta + valorJuros;
      }
      else{
        this.contaAReceber.valorRecebido = this.contaAReceber.valorParcela;

      }
  
      return this.contaAReceber.valorRecebido;
    }

    return 0;
  }

}
