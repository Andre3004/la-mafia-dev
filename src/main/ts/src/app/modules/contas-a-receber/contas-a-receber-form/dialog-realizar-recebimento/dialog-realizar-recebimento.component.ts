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

    this.contaAReceber.valorRecebido = this.contaAReceber.valorParcela - this.contaAReceber.desconto + this.contaAReceber.juros + this.contaAReceber.multa;
  }

}
