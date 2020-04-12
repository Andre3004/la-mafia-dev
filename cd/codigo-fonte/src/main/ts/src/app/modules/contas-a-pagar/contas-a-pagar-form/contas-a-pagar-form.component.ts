import { ContasAPagar, Cidade, Estado, Pais, Fornecedor, FormaPagamento } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ContasAPagarService, CidadeService, EstadoService, PaisService, FornecedorService, FormaPagamentoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';

@Component({
  selector: 'app-contas-a-pagar-form',
  templateUrl: './contas-a-pagar-form.component.html',
  styleUrls: ['./contas-a-pagar-form.component.scss']
})
export class ContasAPagarFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public contaAPagar: ContasAPagar = {isAvulso: true};

  public fornecedores: Fornecedor[] = [];

  public formasPagamentos: FormaPagamento[] = [];

  public dataHoje = new Date();


  constructor(
    private contasAPagarService: ContasAPagarService,
    private openSnackBarService: OpenSnackBarService,
    private fornecedorService: FornecedorService,
    private formaPagamentoService: FormaPagamentoService,
    public dialogRef: MatDialogRef<ContasAPagarFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.contasAPagar != null)
    {
      this.onFindContasAPagarById(data.contasAPagar);
    }

  }

  ngOnInit()
  {
    if (this.data.contasAPagar && !this.data.contasAPagar.situacaoLiquidez)
      this.title = "Alterar contas á pagar";
    else if (this.data.contasAPagar && this.data.contasAPagar.situacaoLiquidez)
      this.title = "Visualizar contas á pagar";
    else
      this.title = "Inserir contas á pagar";

    this.onListFornecedores("");
    this.onListFormasPagamentos("");

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindContasAPagarById(contaAPagar: ContasAPagar)
  {
    this.contasAPagarService.findContaAPagar(contaAPagar.modelo, contaAPagar.serie, contaAPagar.numeroNota, contaAPagar.fornecedor.codigo, contaAPagar.numeroParcela).subscribe(entity =>
    {
      this.contaAPagar = entity;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(form): void
  {
    if(form.invalid || !this.contaAPagar.dataEmissao || !this.contaAPagar.dataVencimento || !this.contaAPagar.fornecedor || !this.contaAPagar.formaPagamento){
      this.openSnackBarService.openError("Todos com campos com * devem ser preenchidos.");
      return;
    }

    if (! (this.data.contasAPagar && !this.data.contasAPagar.situacaoLiquidez))
      if(this.contaAPagar.dataVencimento < this.contaAPagar.dataEmissao){
        this.openSnackBarService.openError("O campo data de vencimento deve ser maior ou igual a data de emissão.");
        return;
      }

    if (this.contaAPagar.juros && this.contaAPagar.juros > 100)
    {
      this.openSnackBarService.openError("O campo juros não pode ser maior que 100%.");
      return;
    }

    if (this.contaAPagar.desconto && this.contaAPagar.desconto > 100)
    {
      this.openSnackBarService.openError("O campo desconto não pode ser maior que 100%.");
      return;
    }

    if (this.contaAPagar.multa && this.contaAPagar.multa > 100)
    {
      this.openSnackBarService.openError("O campo multa não pode ser maior que 100%.");
      return;
    }

    if(!this.contaAPagar.created)
    {
      this.contasAPagarService.insertContaAPagar(this.contaAPagar).subscribe( result => {
        this.openSnackBarService.openSuccess("Conta á pagar salva com sucesso.");
        this.dialogRef.close(this.contaAPagar);
      }, err => this.openSnackBarService.openError(err.message));
    }
    else{
      this.contasAPagarService.updateContaAPagar(this.contaAPagar).subscribe( result => {
        this.openSnackBarService.openSuccess("Conta á pagar atualizada com sucesso.");
        this.dialogRef.close(this.contaAPagar);
      }, err => this.openSnackBarService.openError(err.message));
    }

  }


  ///////////MODAL

  public onListFornecedores(filter)
  {
    this.fornecedorService.listFornecedorsByFilters(filter ? filter : "", null).subscribe(page =>
    {
      this.fornecedores = page.content.filter(c => c.situacao);
    })
  }

  public onListFormasPagamentos(filter)
  {
    this.formaPagamentoService.listFormaPagamentoByFilters(filter ? filter : "", null).subscribe(page =>
    {
      this.formasPagamentos = page.content.filter(c => c.situacao);
    })
  }

  public displayFnFornecedor(fornecedor?: Fornecedor): string | undefined
  {
    return fornecedor ? fornecedor.razaoSocial : undefined;
  }
}
