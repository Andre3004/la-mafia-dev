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
            data: { codigo: formaPagamento ? formaPagamento.codigo : null }
        });

        dialogRef.afterClosed().subscribe(formaPagamentoSaved =>
        {
            if (formaPagamentoSaved) this.onListFormaPagamentos();
        });
    }


    public atualizarSituacaoFormaPagamento(formaPagamento: FormaPagamento)
    {
        if (formaPagamento.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta forma de pagamento ?",
                title: "Excluir forma de pagamento",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.formaPagamentoService.deleteFormaPagamento(formaPagamento.codigo).subscribe(result =>
                    {
                        this.openSnackBarService.openSuccess('Forma de pagamento excluída com sucesso.');
                        this.onListFormaPagamentos();
                    }, err =>
                        {


                            this._dialogService.openConfirm({
                                message: "Não foi possível excluir esta forma de pagamento pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                                title: "Desativar forma de pagamento",
                                cancelButton: 'CANCELAR',
                                acceptButton: 'CONFIRMAR',
                                width: '500px'
                            }).afterClosed().subscribe((accept: boolean) =>
                            {
                                if (accept)
                                {
                                    this.formaPagamentoService.updateSituacaoFormaPagamento(formaPagamento.codigo, !formaPagamento.situacao).subscribe(result =>
                                    {
                                        this.openSnackBarService.openSuccess('Forma de pagamento desativada com sucesso.');
                                        this.onListFormaPagamentos();
                                    }, err => this.openSnackBarService.openError(err.message))
                                }
                            });
                        })
                }
            });
        }
        else
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar este forma de pagamento ?",
                title: "Ativar forma de pagamento",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.formaPagamentoService.updateSituacaoFormaPagamento(formaPagamento.codigo, !formaPagamento.situacao).subscribe(result =>
                    {
                        this.openSnackBarService.openSuccess('Forma de pagamento ativado com sucesso.');
                        this.onListFormaPagamentos();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }


    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListFormaPagamentos();
    }


}
