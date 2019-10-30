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

    this.contaAPagar.valorPago = this.contaAPagar.valorParcela - this.contaAPagar.desconto + this.contaAPagar.juros + this.contaAPagar.multa;
  }

}
