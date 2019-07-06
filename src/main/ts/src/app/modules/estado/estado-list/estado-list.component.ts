import { EstadoFormComponent } from './../estado-form/estado-form.component';
import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/generated/services';


import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Estado } from 'src/generated/entities';


@Component({
    selector: 'app-estado-list',
    templateUrl: './estado-list.component.html',
    styleUrls: ['./estado-list.component.scss']
})
export class EstadoListComponent implements OnInit
{

    public pageRequest: any = [];

    public filters = {
        estado: '',

    }
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'idEstado', label: 'CÓDIGO' },
        { name: 'estado', label: 'ESTADO' },
        { name: 'uf', label: 'UF' },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', width: 250 }
    ];

    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private estadoService: EstadoService) 
    {

        this.pageRequest = paginationService.pageRequest('titulo', 'ASC', 10);



    }


    ngOnInit()
    {
        this.onListEstados();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    public onListEstados(filters: Boolean = true): void
    {


        this.estadoService.listEstadosByFilters(
            this.filters.estado,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public openForm(estado)
    {
        const dialogRef = this.dialog.open(EstadoFormComponent, {
            width: '600px',
            height: 'auto',
            data: { idEstado: estado ? estado.idEstado : null }
        });

        dialogRef.afterClosed().subscribe(estadoSaved =>
        {
            if (estadoSaved) this.onListEstados();
        });
    }


    public atualizarSituacaoEstado(estado: Estado)
    {
        if(estado.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este estado ?",
                title: "Excluir estado" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.estadoService.deleteEstado(estado.idEstado).subscribe( result => {
                        this.openSnackBarService.openSuccess('Estado excluído com sucesso.');
                        this.onListEstados();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este estado pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar estado",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.estadoService.updateSituacaoEstado(estado.idEstado, !estado.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('Estado desativado com sucesso.');
                                    this.onListEstados();
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
                message: "Tem certeza que deseja ativar esta estado ?",
                title: "Ativar estado",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.estadoService.updateSituacaoEstado(estado.idEstado, !estado.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Estado ativado com sucesso.');
                        this.onListEstados();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListEstados();
    }


}
