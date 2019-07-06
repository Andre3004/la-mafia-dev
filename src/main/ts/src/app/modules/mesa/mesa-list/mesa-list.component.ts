import { Component, OnInit } from '@angular/core';
import { MesaFormComponent } from '../mesa-form/mesa-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { MesaService, AmbienteService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Mesa, Ambiente } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';


@Component({
    selector: 'app-mesa-list',
    templateUrl: './mesa-list.component.html',
    styleUrls: ['./mesa-list.component.scss']
})
export class MesaListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        numeroMesa: null,
        ambiente: null
    }

    public ambientes: Ambiente[];

    public ambienteFilter: string = ""; 

    public textMasks = TextMasks;

    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'numeroMesa', label: 'NÚMERO MESA', sortable: false },
        { name: 'ambiente.nome', label: 'AMBIENTE', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    /**
     * 
     * @param dialog 
     * @param _dialogService 
     * @param paginationService 
     * @param openSnackBarService 
     * @param mesaService 
     */
    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private mesaService: MesaService,
        private ambienteService: AmbienteService) 
    {
        this.pageRequest = paginationService.pageRequest('numeroMesa', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListMesas();
        this.onListAmbientes();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo mesa
     */
    public onListMesas(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.mesaService.listMesasByFilters(
            this.filters.numeroMesa,
            this.filters.ambiente != null ? this.filters.ambiente.codigo : null,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public clearFilters()
    {
        this.filters = {
            numeroMesa: null,
            ambiente: null,
        }
        
        this.ambienteFilter = "";

        this.onListMesas();
        this.onListAmbientes();
    }


    public openForm(mesa: Mesa)
    {
        const dialogRef = this.dialog.open(MesaFormComponent, {
            width: '600px',
            height: 'auto',
            data: { mesaId: mesa ? mesa.numeroMesa : null }
        });

        dialogRef.afterClosed().subscribe(mesaSaved =>
        {
            if(mesaSaved) this.onListMesas();
        });
    }


    public atualizarSituacaoMesa(mesa: Mesa)
    {
        if(mesa.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta mesa ?",
                title: "Excluir mesa" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.mesaService.deleteMesa(mesa.numeroMesa).subscribe( result => {
                        this.openSnackBarService.openSuccess('Mesa excluída com sucesso.');
                        this.onListMesas();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir esta mesa pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar mesa",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.mesaService.updateSituacaoMesa(mesa.numeroMesa, !mesa.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('Mesa desativada com sucesso.');
                                    this.onListMesas();
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
                message: "Tem certeza que deseja ativar esta mesa ?",
                title: "Ativar mesa",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.mesaService.updateSituacaoMesa(mesa.numeroMesa, !mesa.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Mesa ativado com sucesso.');
                        this.onListMesas();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListMesas();
    }

    public onListAmbientes()
    {
        this.ambienteService.listAmbientesByFilters(this.ambienteFilter ? this.ambienteFilter : "", null)
            .subscribe( ambientePage => 
        {
            this.ambientes = ambientePage.content; 
        })
    }

    public displayFn(ambiente?: Ambiente): string | undefined {
        return ambiente ? ambiente.ambiente : undefined;
    }
}
