import { Component, OnInit } from '@angular/core';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { ClienteService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Cliente } from 'src/generated/entities';


@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        cliente: '',

    }

    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'idCliente', label: 'CÓDIGO' },
        { name: 'cliente', label: 'CLIENTE', sortable: false },
        { name: 'celular', label: 'CELULAR', sortable: false },
        { name: 'cpf', label: 'CPF', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 300 }
    ];

    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private clienteService: ClienteService) 
    {
        this.pageRequest = paginationService.pageRequest('titulo', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListClientes();
    }

    public onListClientes(filters: Boolean = true): void
    {
        this.clienteService.listClientesByFilters(
            this.filters.cliente,
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }
        


    public openForm(cliente)
    {
        const dialogRef = this.dialog.open(ClienteFormComponent, {
            width: '800px',
            height: 'auto',
            data: { idCliente: cliente ? cliente.idCliente : null }
        });

        dialogRef.afterClosed().subscribe(clienteSaved =>
        {
            if(clienteSaved) this.onListClientes();
        });
    }

    public atualizarSituacaoCliente(cliente: Cliente)
    {
        this._dialogService.openConfirm({
            message: !cliente.situacao ? "Tem certeza que deseja ativar este cliente ? " : "Tem certeza que deseja desativar este cliente ? ",
            title: !cliente.situacao ? "Ativar cliente" : "Desativar cliente",
            cancelButton: 'CANCELAR',
            acceptButton: 'CONFIRMAR',
            width: '500px'
        }).afterClosed().subscribe((accept: boolean) =>
        {
            if (accept)
            {
                this.clienteService.updateSituacaoCliente(cliente.idCliente, !cliente.situacao).subscribe(result =>
                {
                    this.openSnackBarService.openSuccess(cliente.situacao ? 'Cliente desativado com sucesso.' : 'Cliente ativado com sucesso.');
                    this.onListClientes();
                }, err => this.openSnackBarService.openError(err.message))
            }
        });
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListClientes();
    }
  
}
