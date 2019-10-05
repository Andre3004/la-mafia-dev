import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { AmbienteService, FornecedorService, ContasAPagarService } from 'src/generated/services'; //contasAPagarService, 
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Usuario, Fornecedor, Compra } from 'src/generated/entities'; //Compra, 
import { TextMasks } from 'src/app/common/mask/text-masks';


@Component({
    selector: 'app-contas-a-pagar-list',
    templateUrl: './contas-a-pagar-list.component.html',
    styleUrls: ['./contas-a-pagar-list.component.scss']
})
export class ContasAPagarListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        fornecedor: null,
        modelo: "",
        serie: "",
        numeroNota: ""
    }

    public textMasks = TextMasks;
    /**
     * Colunas da Grid
     */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'numero_parcela', label: 'NÚMERO DA PARCELA', sortable: false },
        { name: 'modelo', label: 'MODELO', sortable: false },
        { name: 'serie', label: 'SERIE', sortable: false },
        { name: 'numeroNota', label: 'NUMERO DA NOTA', sortable: false },
        { name: 'fornecedor', label: 'FORNECEDOR', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
    ];

    public fornecedores: Fornecedor[] = [];

    constructor(public dialog: MatDialog,
        private contasAPagarService: ContasAPagarService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private _dialogService: TdDialogService,
        private fornecedorService: FornecedorService) 
    {
        this.pageRequest = paginationService.pageRequest('modelo', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListContasAPagar(true);
        this.onListFornecedores("");
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
      */
    public onListContasAPagar(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.contasAPagarService.listContasAPagarByFilters(
            this.filters.modelo,
            this.filters.serie,
            this.filters.numeroNota,
            this.filters.fornecedor ? this.filters.fornecedor.codigo : null,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public clearFilters()
    {

        this.filters = {
            fornecedor: null,
            modelo: "",
            serie: "",
            numeroNota: ""
        }


        this.onListContasAPagar();
    }


    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListContasAPagar(false);
    }

    /////////////////MODEL

    public onListFornecedores(filter)
    {
        this.fornecedorService.listFornecedorsByFilters(filter ? filter : "", null).subscribe(page =>
        {
            this.fornecedores = page.content.filter(c => c.situacao);
        })
    }

    public displayFnFornecedor(fornecedor?: Fornecedor): string | undefined
    {
        return fornecedor ? fornecedor.razaoSocial : undefined;
    }

}
