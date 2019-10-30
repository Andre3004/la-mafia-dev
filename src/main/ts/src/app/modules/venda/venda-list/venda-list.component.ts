import { Component, OnInit } from '@angular/core';
import { VendaFormComponent } from '../venda-form/venda-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { AmbienteService, ClienteService, VendaService } from 'src/generated/services'; //VendaService, 
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Usuario, Cliente, Venda } from 'src/generated/entities'; //Venda, 
import { TextMasks } from 'src/app/common/mask/text-masks';


@Component({
    selector: 'app-venda-list',
    templateUrl: './venda-list.component.html',
    styleUrls: ['./venda-list.component.scss']
})
export class VendaListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        cliente: null,
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
        { name: 'cliente', label: 'FORNECEDOR', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    public clientes: Cliente[] = [];

    constructor(public dialog: MatDialog, private vendaService: VendaService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private _dialogService: TdDialogService,
        private clienteService: ClienteService) 
    {
        this.pageRequest = paginationService.pageRequest('modelo', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListVendasByFilters(true);
        this.onListClientes("");
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/


    public openForm(venda: Venda, isDetail: boolean = false)
    {
        const dialogRef = this.dialog.open(VendaFormComponent, {
            width: '1200px',
            height: 'auto',
            data: { isDetail, venda }
        });

        dialogRef.afterClosed().subscribe(() =>
        {
            this.onListVendasByFilters();
        });
    }

    /**
      */
    public onListVendasByFilters(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.vendaService.listVendasByFilters(
            this.filters.modelo,
            this.filters.serie,
            this.filters.numeroNota,
            this.filters.cliente ? this.filters.cliente.codigo : null,
            this.pageRequest.pageable
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }

    public clearFilters()
    {

        this.filters = {
            cliente: null,
            modelo: "",
            serie: "",
            numeroNota: ""
        }


        this.onListVendasByFilters();
    }


    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListVendasByFilters();
    }

    public atualizarSituacaoVenda(venda: Venda)
    {
        if(venda.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja cancelar esta venda ?",
                title: "Cancelar venda",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.vendaService.updateSituacaoVenda(venda.modelo, venda.serie, venda.numeroNota, venda.cliente.codigo, !venda.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Venda cancelada com sucesso.');
                        this.onListVendasByFilters();
                    }, err => this.openSnackBarService.openError(err.message, 10000))
                }
            });
        }
        else
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja restaurar esta venda ?",
                title: "Restaurar venda",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.vendaService.updateSituacaoVenda(venda.modelo, venda.serie, venda.numeroNota, venda.cliente.codigo, !venda.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Venda restaurar com sucesso.');
                        this.onListVendasByFilters();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }



    /////////////////MODEL

    public onListClientes(filter)
    {
        this.clienteService.listClientesByFilters(filter ? filter : "", null).subscribe(page =>
        {
            this.clientes = page.content.filter(c => c.situacao);
        })
    }

    public displayFnCliente(cliente?: Cliente): string | undefined
    {
        return cliente ? cliente.cliente : undefined;
    }

}
