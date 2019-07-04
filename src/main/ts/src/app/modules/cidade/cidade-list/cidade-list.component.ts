import { CidadeFormComponent } from './../cidade-form/cidade-form.component';
import { Component, OnInit } from '@angular/core';
import { CidadeService } from 'src/generated/services';


import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Cidade } from 'src/generated/entities';


@Component({
    selector: 'app-cidade-list',
    templateUrl: './cidade-list.component.html',
    styleUrls: ['./cidade-list.component.scss']
})
export class CidadeListComponent implements OnInit
{

    public pageRequest: any = [];

    public filters = {
        cidade: '',

    }
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'idCidade', label: 'CÓDIGO' },
        { name: 'cidade', label: 'CIDADE' },
        { name: 'ddd', label: 'DDD' },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', width: 250 }
    ];

    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private cidadeService: CidadeService) 
    {

        this.pageRequest = paginationService.pageRequest('idCidade', 'ASC', 10);



    }


    ngOnInit()
    {
        this.onListCidades();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    public onListCidades(filters: Boolean = true): void
    {
        this.cidadeService.listCidadesByFilters(
            this.filters.cidade,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public openForm(cidade)
    {
        const dialogRef = this.dialog.open(CidadeFormComponent, {
            width: '600px',
            height: 'auto',
            data: { idCidade: cidade ? cidade.idCidade : null }
        });

        dialogRef.afterClosed().subscribe(cidadeSaved =>
        {
            if (cidadeSaved) this.onListCidades();
        });
    }


    public atualizarSituacaoCidade(cidade: Cidade)
    {
        this._dialogService.openConfirm({
            message: !cidade.situacao ? "Tem certeza que deseja ativar esta cidade ? " : "Tem certeza que deseja desativar esta cidade ? ",
            title: !cidade.situacao ? "Ativar cidade" : "Desativar cidade",
            cancelButton: 'CANCELAR',
            acceptButton: 'CONFIRMAR',
            width: '500px'
        }).afterClosed().subscribe((accept: boolean) =>
        {
            if (accept)
            {
                this.cidadeService.updateSituacaoCidade(cidade.idCidade, !cidade.situacao).subscribe(result =>
                {
                    this.openSnackBarService.openSuccess(cidade.situacao ? 'Cidade desativada com sucesso.' : 'Cidade ativada com sucesso.');
                    this.onListCidades();
                }, err => this.openSnackBarService.openError(err.message))
            }
        });
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListCidades();
    }

}