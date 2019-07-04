import { Component, OnInit } from '@angular/core';
import { FranquiaFormComponent } from '../franquia-form/franquia-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';


@Component({
    selector: 'app-franquia-list',
    templateUrl: './franquia-list.component.html',
    styleUrls: ['./franquia-list.component.scss']
})
export class FranquiaListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        nome: '',
        cnpj: '',
    }

    public maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'nome', label: 'FRANQUIA', sortable: false },
        { name: 'cnpj', label: 'CNPJ', sortable: false },
        { name: 'cidade', label: 'CIDADE', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    /**
     * 
     * @param dialog 
     * @param _dialogService 
     * @param paginationService 
     * @param openSnackBarService 
     * @param franquiaService 
     */
    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private franquiaService: FranquiaService) 
    {
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListFranquias();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo franquia
     */
    public onListFranquias(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.franquiaService.listFranquiasByFilters(
            this.filters.nome,
            this.filters.cnpj,
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
            cnpj: '',
        }
        
        this.onListFranquias();
    }


    public openForm(franquia)
    {
        const dialogRef = this.dialog.open(FranquiaFormComponent, {
            width: '900px',
            height: 'auto',
            data: { franquiaId: franquia ? franquia.codigo : null }
        });

        dialogRef.afterClosed().subscribe(franquiaSaved =>
        {
            if(franquiaSaved) this.onListFranquias();
        });
    }


    public atualizarSituacaoFranquia(franquia)
    {
        this._dialogService.openConfirm({
            message: !franquia.situacao  ? "Tem certeza que deseja ativar esta franquia ? " : "Tem certeza que deseja desativar esta franquia ? ",
            title: !franquia.situacao  ? "Ativar franquia" : "Desativar franquia",
            cancelButton: 'CANCELAR',
            acceptButton: 'CONFIRMAR',
            width: '500px'
        }).afterClosed().subscribe((accept: boolean) =>
        {
            if (accept)
            {
                this.franquiaService.updateSituacaoFranquia(franquia.codigo, !franquia.situacao).subscribe( result => {
                    this.openSnackBarService.openSuccess(franquia.situacao ? 'franquia desativada com sucesso.' : 'franquia ativada com sucesso.');
                    this.onListFranquias();
                }, err => this.openSnackBarService.openError(err.message))
            }
        });
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListFranquias();
    }
}
