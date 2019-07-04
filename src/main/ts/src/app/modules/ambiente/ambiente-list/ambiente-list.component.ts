import { Component, OnInit } from '@angular/core';
import { AmbienteFormComponent } from '../ambiente-form/ambiente-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { AmbienteService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Franquia } from 'src/generated/entities';
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
        franquia: null
    }

    public franquias: Franquia[];

    public franquiaFilter: string = "";

    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'nome', label: 'AMBIENTE', sortable: false },
        { name: 'franquia.nome', label: 'FRANQUIA', sortable: false },
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
        private franquiaService: FranquiaService,
        public activatedRoute: ActivatedRoute) 
    {
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }

    ngOnInit()
    {        
        this.onListAmbientes();
        this.onListFranquias();
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


    public atualizarSituacaoAmbiente(ambiente)
    {
        this._dialogService.openConfirm({
            message: !ambiente.situacao  ? "Tem certeza que deseja ativar este ambiente ? " : "Tem certeza que deseja desativar este ambiente ? ",
            title: !ambiente.situacao  ? "Ativar ambiente" : "Desativar ambiente",
            cancelButton: 'CANCELAR',
            acceptButton: 'CONFIRMAR',
            width: '500px'
        }).afterClosed().subscribe((accept: boolean) =>
        {
            if (accept)
            {
                this.ambienteService.updateSituacaoAmbiente(ambiente.codigo, !ambiente.situacao).subscribe( result => {
                    this.openSnackBarService.openSuccess(ambiente.situacao ? 'Ambiente desativado com sucesso.' : 'Ambiente ativado com sucesso.');
                    this.onListAmbientes();
                }, err => this.openSnackBarService.openError(err.message))
            }
        });
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
            this.filters.franquia != null ? this.filters.franquia.codigo : null,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public onListFranquias()
    {
        this.franquiaService.listFranquiasByFilters(this.franquiaFilter ? this.franquiaFilter : "", "", null).subscribe( franquiaPage => {
        this.franquias = franquiaPage.content; 
        })
    }

    public displayFn(franquia?: Franquia): string | undefined {
        return franquia ? franquia.franquia : undefined;
    }
    

    public clearFilters()
    {
        this.filters = {
            nome: '',
            franquia: null
        }
        
        this.franquiaFilter = "";

        this.onListAmbientes();
        this.onListFranquias();
    }



    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListAmbientes();
    }
}
