import { Component, OnInit } from '@angular/core';
import { CondicaoPagamentoFormComponent } from '../condicao-pagamento-form/condicao-pagamento-form.component';
import { MatDialog } from '@angular/material';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { CondicaoPagamentoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Franquia, CondicaoPagamento } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';


@Component({
    selector: 'app-condicao-pagamento-list',
    templateUrl: './condicao-pagamento-list.component.html',
    styleUrls: ['./condicao-pagamento-list.component.scss']
})
export class CondicaoPagamentoListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        codigo: null
    }

    public masks = TextMasks;

    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'multa', label: 'MULTA', sortable: false },
        { name: 'desconto', label: 'DESCONTO', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    /**
     * 
     * @param dialog 
     * @param _dialogService 
     * @param paginationService 
     * @param openSnackBarService 
     * @param condicaoPagamentoService 
     */
    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private condicaoPagamentoService: CondicaoPagamentoService) 
    {
        this.pageRequest = paginationService.pageRequest('codigo', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListCondicaoPagamentos();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    public openForm(condicaoPagamento)
    {
        const dialogRef = this.dialog.open(CondicaoPagamentoFormComponent, {
            width: '1100px',
            height: 'auto',
            data: { condicaoPagamentoId: condicaoPagamento ? condicaoPagamento.codigo : null }
        });

        dialogRef.afterClosed().subscribe(condicaoPagamentoSaved =>
        {
            if(condicaoPagamentoSaved) this.onListCondicaoPagamentos();
        });
    }


    public atualizarSituacaoCondicaoPagamento(condicaoPagamento: CondicaoPagamento)
    {
        if(condicaoPagamento.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta condição de pagamento ?",
                title: "Excluir condição de pagamento" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.condicaoPagamentoService.deleteCondicaoPagamento(condicaoPagamento.codigo).subscribe( result => {
                        this.openSnackBarService.openSuccess('Condição de pagamento excluído com sucesso.');
                        this.onListCondicaoPagamentos();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este condição de pagamento pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar condição de pagamento",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.condicaoPagamentoService.updateSituacaoCondicaoPagamento(condicaoPagamento.codigo, !condicaoPagamento.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('Condição de pagamento desativado com sucesso.');
                                    this.onListCondicaoPagamentos();
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
                message: "Tem certeza que deseja ativar este condição de pagamento ?",
                title: "Ativar condição de pagamento",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.condicaoPagamentoService.updateSituacaoCondicaoPagamento(condicaoPagamento.codigo, !condicaoPagamento.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Condição de pagamento ativado com sucesso.');
                        this.onListCondicaoPagamentos();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }


    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo condicaoPagamento
     */
    public onListCondicaoPagamentos(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.condicaoPagamentoService.listCondicaoPagamentosByFilters(
            this.filters.codigo,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }


    public clearFilters()
    {
        this.filters = {
            codigo: null
        }
        
        this.onListCondicaoPagamentos();
    }



    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListCondicaoPagamentos();
    }
}
