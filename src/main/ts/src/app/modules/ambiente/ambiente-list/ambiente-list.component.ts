import { Component, OnInit } from '@angular/core';
import { AmbienteFormComponent } from '../ambiente-form/ambiente-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { AmbienteService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Franquia, Ambiente } from 'src/generated/entities';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-ambiente-list',
    templateUrl: './ambiente-list.component.html',
    styleUrls: ['./ambiente-list.component.scss']
})
export class AmbienteListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        nome: '',
    }



    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'nome', label: 'AMBIENTE', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    /**
     * 
     * @param dialog 
     * @param _dialogService 
     * @param paginationService 
     * @param openSnackBarService 
     * @param ambienteService 
     */
    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private ambienteService: AmbienteService,
        public activatedRoute: ActivatedRoute) 
    {
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }

    ngOnInit()
    {        
        this.onListAmbientes();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    public openForm(ambiente)
    {
        const dialogRef = this.dialog.open(AmbienteFormComponent, {
            width: '800px',
            height: 'auto',
            data: { ambienteId: ambiente ? ambiente.codigo : null }
        });

        dialogRef.afterClosed().subscribe(ambienteSaved =>
        {
            if(ambienteSaved) this.onListAmbientes();
        });
    }


    public atualizarSituacaoAmbiente(ambiente: Ambiente)
    {
        if(ambiente.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este ambiente ?",
                title: "Excluir ambiente" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.ambienteService.deleteAmbiente(ambiente.codigo).subscribe( result => {
                        this.openSnackBarService.openSuccess('Ambiente excluído com sucesso.');
                        this.onListAmbientes();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este ambiente pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar ambiente",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.ambienteService.updateSituacaoAmbiente(ambiente.codigo, !ambiente.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('Ambiente desativado com sucesso.');
                                    this.onListAmbientes();
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
                message: "Tem certeza que deseja ativar este ambiente ?",
                title: "Ativar ambiente",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.ambienteService.updateSituacaoAmbiente(ambiente.codigo, !ambiente.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Ambiente ativado com sucesso.');
                        this.onListAmbientes();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }


    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo ambiente
     */
    public onListAmbientes(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.ambienteService.listAmbientesByFilters(
            this.filters.nome,
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
        }
        

        this.onListAmbientes();
    }



    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListAmbientes();
    }
}
