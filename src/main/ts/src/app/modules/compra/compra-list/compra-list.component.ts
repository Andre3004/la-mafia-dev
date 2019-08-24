import { Component, OnInit } from '@angular/core';
import { CompraFormComponent } from '../compra-form/compra-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { AmbienteService, FornecedorService, CompraService } from 'src/generated/services'; //CompraService, 
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Usuario, Fornecedor } from 'src/generated/entities'; //Compra, 
import { TextMasks } from 'src/app/common/mask/text-masks';


@Component({
    selector: 'app-compra-list',
    templateUrl: './compra-list.component.html',
    styleUrls: ['./compra-list.component.scss']
})
export class CompraListComponent implements OnInit
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
        { name: 'modelo', label: 'MODELO', sortable: false },
        { name: 'serie', label: 'SERIE', sortable: false },
        { name: 'numeroNota', label: 'NUMERO DA NOTA', sortable: false },
        { name: 'fornecedor.razaoSocial', label: 'FORNECEDOR', sortable: false },
        // { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    public fornecedores: Fornecedor[] = [];

    constructor(public dialog: MatDialog, private compraService: CompraService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private fornecedorService: FornecedorService) 
    {
        this.pageRequest = paginationService.pageRequest('modelo', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListComprasByFilters(true);
        this.onListFornecedores("");
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/


    public openForm(compra: any) //compra
    {
        const dialogRef = this.dialog.open(CompraFormComponent, {
            width: '1000px',
            height: 'auto',
            data: { compraId: compra ? compra.numeroCompra : null }
        });

        dialogRef.afterClosed().subscribe(compraSaved =>
        {
            //    if(compraSaved) this.onListCompras();
        });
    }

    /**
      */
    public onListComprasByFilters(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.compraService.listComprasByFilters(
            this.filters.modelo,
            this.filters.serie,
            this.filters.numeroNota,
            this.filters.fornecedor ? this.filters.fornecedor.idFornecedor : null
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


        this.onListComprasByFilters();
    }


    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListComprasByFilters();
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
