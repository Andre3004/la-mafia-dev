import { Component, OnInit } from '@angular/core';
import { GrupoProdutoFormComponent } from '../grupo-produto-form/grupo-produto-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { GrupoProdutoService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Franquia, GrupoProduto } from 'src/generated/entities';


@Component({
    selector: 'app-grupo-produto-list',
    templateUrl: './grupo-produto-list.component.html',
    styleUrls: ['./grupo-produto-list.component.scss']
})
export class GrupoProdutoListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        nome: '',
        franquia: null
    }

    public franquias: Franquia[];

    public franquiaFilter: string = "";

    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'nome', label: 'GRUPO DE PRODUTO', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    /**
     * 
     * @param dialog 
     * @param _dialogService 
     * @param paginationService 
     * @param openSnackBarService 
     * @param grupoProdutoService 
     */
    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private grupoProdutoService: GrupoProdutoService,
        private franquiaService: FranquiaService) 
    {
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListGrupoProdutos();
        this.onListFranquias();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    public openForm(grupoProduto)
    {
        const dialogRef = this.dialog.open(GrupoProdutoFormComponent, {
            width: '800px',
            height: 'auto',
            data: { grupoProdutoId: grupoProduto ? grupoProduto.codigo : null }
        });

        dialogRef.afterClosed().subscribe(grupoProdutoSaved =>
        {
            if (grupoProdutoSaved) this.onListGrupoProdutos();
        });
    }


    public atualizarSituacaoGrupoProduto(grupoProduto: GrupoProduto)
    {
        if (grupoProduto.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta grupo de produto ?",
                title: "Excluir grupo de produto",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.grupoProdutoService.deleteGrupoProduto(grupoProduto.codigo).subscribe(result =>
                    {
                        this.openSnackBarService.openSuccess('Grupo de produto excluído com sucesso.');
                        this.onListGrupoProdutos();
                    }, err =>
                    {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este grupo de produto pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar grupo de produto",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.grupoProdutoService.updateSituacaoGrupoProduto(grupoProduto.codigo, !grupoProduto.situacao).subscribe(result =>
                                {
                                    this.openSnackBarService.openSuccess('Grupo de produto desativado com sucesso.');
                                    this.onListGrupoProdutos();
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
                message: "Tem certeza que deseja ativar este grupo de produto ?",
                title: "Ativar grupo de produto",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.grupoProdutoService.updateSituacaoGrupoProduto(grupoProduto.codigo, !grupoProduto.situacao).subscribe(result =>
                    {
                        this.openSnackBarService.openSuccess('Grupo de produto ativado com sucesso.');
                        this.onListGrupoProdutos();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }


    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo grupoProduto
     */
    public onListGrupoProdutos(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.grupoProdutoService.listGrupoProdutosByFilters(
            this.filters.nome,
            this.filters.franquia != null ? this.filters.franquia.codigo : null,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public onListFranquias()
    {
        this.franquiaService.listFranquiasByFilters(this.franquiaFilter ? this.franquiaFilter : "", "", null).subscribe(franquiaPage =>
        {
            this.franquias = franquiaPage.content;
        })
    }

    public displayFn(franquia?: Franquia): string | undefined
    {
        return franquia ? franquia.franquia : undefined;
    }


    public clearFilters()
    {
        this.filters = {
            nome: '',
            franquia: null
        }

        this.franquiaFilter = "";

        this.onListGrupoProdutos();
        this.onListFranquias();
    }



    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListGrupoProdutos();
    }
}
