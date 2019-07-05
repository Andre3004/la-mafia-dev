import { FormaPagamentoFormComponent } from './../forma-pagamento-form/forma-pagamento-form.component';
import { Component, OnInit } from '@angular/core';
import { FormaPagamentoService } from 'src/generated/services';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { FormaPagamento } from 'src/generated/entities';


@Component({
    selector: 'app-formaPagamento-list',
    templateUrl: './forma-pagamento-list.component.html',
    styleUrls: ['./forma-pagamento-list.component.scss']
})
export class FormaPagamentoListComponent implements OnInit
{

    public pageRequest: any = [];

    public filters = {
        formaPagamento: '',

    }
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'formaPagamento', label: 'FORMA PAGAMENTO' },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'Opções', width: 250 }
    ];

    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private formaPagamentoService: FormaPagamentoService) 
    {

        this.pageRequest = paginationService.pageRequest('formaPagamento', 'ASC', 10);



    }


    ngOnInit()
    {
        this.onListFormaPagamentos();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    public onListFormaPagamentos(filters: Boolean = true): void
    {


        this.formaPagamentoService.listFormaPagamentoByFilters(
            this.filters.formaPagamento,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public openForm(formaPagamento: FormaPagamento)
    {
        const dialogRef = this.dialog.open(FormaPagamentoFormComponent, {
            width: '600px',
            height: 'auto',
            data: { idFormaPagamento: formaPagamento ? formaPagamento.codigo : null }
        });

        dialogRef.afterClosed().subscribe(formaPagamentoSaved =>
        {
            if (formaPagamentoSaved) this.onListFormaPagamentos();
        });
    }


    public atualizarSituacaoFormaPagamento(formaPagamento)
    {
        this._dialogService.openConfirm({
            message: !formaPagamento.situacao ? "Tem certeza que deseja ativar esta forma de pagamento ? " : "Tem certeza que deseja desativar esta forma de pagamento ? ",
            title: !formaPagamento.situacao ? "Ativar forma de pagamento" : "Desativar forma de pagamento",
            cancelButton: 'CANCELAR',
            acceptButton: 'CONFIRMAR',
            width: '500px'
        }).afterClosed().subscribe((accept: boolean) =>
        {
            if (accept)
            {
                this.formaPagamentoService.updateSituacaoFormaPagamento(formaPagamento.codigo, !formaPagamento.situacao).subscribe(result =>
                {
                    this.openSnackBarService.openSuccess(formaPagamento.situacao ? 'Forma de pagamento desativada com sucesso.' : 'Forma de pagamento ativada com sucesso.');
                    this.onListFormaPagamentos();
                }, err => this.openSnackBarService.openError(err.message))
            }
        });
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListFormaPagamentos();
    }


}
