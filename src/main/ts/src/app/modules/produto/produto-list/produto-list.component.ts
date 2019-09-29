import { Component, OnInit } from '@angular/core';
import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { ProdutoService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Franquia, Produto } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';


@Component({
    selector: 'app-produto-list',
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        nome: '',
        codigo: null
    }


    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'nome', label: 'PRODUTO', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    public masks = TextMasks;

    /**
     * 
     * @param dialog 
     * @param _dialogService 
     * @param paginationService 
     * @param openSnackBarService 
     * @param produtoService 
     */
    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private produtoService: ProdutoService,
        private franquiaService: FranquiaService) 
    {
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListProdutos();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    public openForm(produto)
    {
        const dialogRef = this.dialog.open(ProdutoFormComponent, {
            width: '800px',
            height: 'auto',
            data: { produtoId: produto ? produto.codigo : null }
        });

        dialogRef.afterClosed().subscribe(produtoSaved =>
        {
            if(produtoSaved) this.onListProdutos();
        });
    }


    public atualizarSituacaoProduto(produto: Produto)
    {
        if(produto.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este produto ?",
                title: "Excluir produto" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.produtoService.deleteProduto(produto.codigo).subscribe( result => {
                        this.openSnackBarService.openSuccess('Produto excluído com sucesso.');
                        this.onListProdutos();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este produto pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar produto",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.produtoService.updateSituacaoProduto(produto.codigo, !produto.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('Produto desativado com sucesso.');
                                    this.onListProdutos();
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
                message: "Tem certeza que deseja ativar esta produto ?",
                title: "Ativar produto",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.produtoService.updateSituacaoProduto(produto.codigo, !produto.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Produto ativado com sucesso.');
                        this.onListProdutos();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }


    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo produto
     */
    public onListProdutos(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.produtoService.listProdutosByFilters(
            this.filters.nome,
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
            nome: '',
            codigo: null
        }

        this.onListProdutos();
    }



    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListProdutos();
    }
}
