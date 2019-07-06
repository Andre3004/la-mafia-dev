import { FormaPagamento } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormaPagamentoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';

@Component({
  selector: 'app-formaPagamento-form',
  templateUrl: './forma-pagamento-form.component.html',
  styleUrls: ['./forma-pagamento-form.component.scss']
})
export class FormaPagamentoFormComponent implements OnInit {
  public title = "";

  public formaPagamento: any = {};




  constructor(
    private formaPagamentoService: FormaPagamentoService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<FormaPagamentoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.codigo != null)
    {
      this.onFindFormaPagamentoById(data.codigo);
    }
  }

  ngOnInit()
  {

    if (this.data.codigo)
      this.title = "Alterar forma de pagamento";
    else
      this.title = "Inserir forma de pagamento";

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindFormaPagamentoById(id: any)
  {
    this.formaPagamentoService.findFormaPagamentoById(id).subscribe(formaPagamento =>
    {
      this.formaPagamento = formaPagamento;
    }, err => this.openSnackBarService.openError(err.message))

  }

 public onSubmit(): void
  {


    if (!this.formaPagamento.codigo)
    {
      this.formaPagamentoService.insertFormaPagamento(this.formaPagamento).subscribe(formaPagamento =>
      {
        this.dialogRef.close(this.formaPagamento);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.formaPagamentoService.updateFormaPagamento(this.formaPagamento).subscribe(formaPagamento =>
      {
        this.openSnackBarService.openSuccess("Forma de pagamento atualizada.");
        this.dialogRef.close(this.formaPagamento);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }


 





}
