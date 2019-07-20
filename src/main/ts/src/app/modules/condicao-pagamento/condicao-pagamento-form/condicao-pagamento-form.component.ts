import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CondicaoPagamentoService, ArquivoService, FormaPagamentoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { CondicaoPagamento, FormaPagamento } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-condicao-pagamento-form',
  templateUrl: './condicao-pagamento-form.component.html',
  styleUrls: ['./condicao-pagamento-form.component.scss']
})
export class CondicaoPagamentoFormComponent implements OnInit
{
  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public condicaoPagamento: CondicaoPagamento = { codigo: 0, prazo: false, parcelas: [] };

  public condicaoPagamentoParcelasToRemoved = [];

  public formasPagamento: FormaPagamento[];

  public masks = TextMasks;

  @ViewChild('parcelaForm', { read: false, static: true })
  private parcelaForm: any;

  constructor(
    private condicaoPagamentoService: CondicaoPagamentoService,
    private formaPagamentoService: FormaPagamentoService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<CondicaoPagamentoFormComponent>,
    private arquivoService: ArquivoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.condicaoPagamentoId != null)
    {
      this.onFindCondicaoPagamentoById(data.condicaoPagamentoId);
    }

    this.onListFormasPagamento("");
  }

  ngOnInit()
  {
    if (this.data.condicaoPagamentoId)
      this.title = "Alterar condição de pagamento";
    else
      this.title = "Inserir condição de pagamento";
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindCondicaoPagamentoById(condicaoPagamentoId: any)
  {
    this.condicaoPagamentoService.findCondicaoPagamentoById(condicaoPagamentoId).subscribe(condicaoPagamento =>
    {
      this.condicaoPagamento = condicaoPagamento;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    if(this.condicaoPagamento.prazo && !this.condicaoPagamento.parcelas.length)
    {
      this.openSnackBarService.openError("Nenhuma parcela adicionada.");
      return;
    }
    
    if (this.condicaoPagamento.parcelas && this.condicaoPagamento.parcelas.length > 0)
    {
      var found = false;

      for (let i = 0; i < this.condicaoPagamento.parcelas.length; i++)
      {
        const condicaoPagamento = this.condicaoPagamento.parcelas[i];

        if (!condicaoPagamento.parcela || !condicaoPagamento.dias || !condicaoPagamento.porcentagem || !condicaoPagamento.formaPagamento)
        {
          found = true;
          break;
        }
      }

      if (found)
      {
        this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
        return;
      }

    }

    if (this.totalPorcentagem != 100)
    {
      this.openSnackBarService.openError("A porcentagem de parcelas deve ser igual a 100%.");
      return;
    }

    this.condicaoPagamento.parcelas = this.condicaoPagamento.parcelas.sort();

    var found = false;
    for (let i = 0; i < this.condicaoPagamento.parcelas.length-1 && !found; i++) {

      const parcela = this.condicaoPagamento.parcelas[i];

      for (let j = i+1; j < this.condicaoPagamento.parcelas.length; j++) {

        const proxParcela = this.condicaoPagamento.parcelas[j];
        
        if(parseInt(parcela.dias as any) > parseInt(proxParcela.dias as any))
        {
          found = true;
          break;
        }
      }
    }

    if(found)
    {
      this.openSnackBarService.openError("Não pode haver uma parcela com os dias maior que a parcela anterior.");
      return;
    }

    

    if (!this.condicaoPagamento.codigo)
    {
      this.condicaoPagamentoService.insertCondicaoPagamento(this.condicaoPagamento).subscribe(condicaoPagamento =>
      {
        this.openSnackBarService.openSuccess("Condição de pagamento salva com sucesso.");
        this.dialogRef.close(this.condicaoPagamento);
      }, err =>
        {

          this.openSnackBarService.openError(err.message)

        })
    }
    else
    {
      this.condicaoPagamentoService.updateCondicaoPagamento(this.condicaoPagamento, this.condicaoPagamentoParcelasToRemoved).subscribe(condicaoPagamento =>
      {
        this.openSnackBarService.openSuccess("Condição de pagamento atualizada com sucesso.");
        this.dialogRef.close(this.condicaoPagamento);
      }, err =>
        {
          this.openSnackBarService.openError(err.message)
        })
    }

  }

  public onListFormasPagamento(filter)
  {
    this.formaPagamentoService.listFormaPagamentoByFilters(filter ? filter : "", null).subscribe(formaPagamentoPage =>
    {
      this.formasPagamento = formaPagamentoPage.content.filter( c => c.situacao);
    })
  }

  public displayFn(formaPagamento?: FormaPagamento): string | undefined
  {
    return formaPagamento ? formaPagamento.formaPagamento : undefined;
  }


  /*-------------------------------------------------------------------
 *                           Formas de pagamento
 *-------------------------------------------------------------------*/

  public addParcela()
  {
    this.condicaoPagamento.parcelas.push({parcela: this.condicaoPagamento.parcelas.length + 1});
  }

  public removeParcela(index)
  {
    if (this.condicaoPagamento.parcelas[index].created)
      this.condicaoPagamentoParcelasToRemoved.push(this.condicaoPagamento.parcelas[index].parcela)

    this.condicaoPagamento.parcelas.splice(index, 1);
  }

  get totalParcelas()
  {
    return this.condicaoPagamento.parcelas.length;
  }

  get totalDias()
  {
    if (this.condicaoPagamento.parcelas && this.condicaoPagamento.parcelas.length)
    {
      var array = this.condicaoPagamento.parcelas.filter(p => p.dias).map(p => p.dias);
      var result = array.length > 0 ? array.reduce((anterior, atual) => parseInt(anterior as any) + parseInt(atual as any)) : 0;
      return isNaN(result) ? 0 : result;
    }
    else
      return 0;
  }

  get totalPorcentagem()
  {
    if (this.condicaoPagamento.parcelas && this.condicaoPagamento.parcelas.length)
    {
      var array = this.condicaoPagamento.parcelas.filter(p => p.porcentagem).map(p => p.porcentagem);
      var result = array.length > 0 ? array.reduce((anterior, atual) => parseInt(anterior as any) + parseInt(atual as any)) : 0;
      return isNaN(result) ? 0 : result;
    }
    else
      return 0;
  }
}
