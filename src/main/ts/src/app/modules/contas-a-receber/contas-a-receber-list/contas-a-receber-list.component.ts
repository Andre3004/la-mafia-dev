import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { AmbienteService, ClienteService, ContasAReceberService } from 'src/generated/services'; //contasAReceberService, 
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Usuario, Cliente, ContasAReceber } from 'src/generated/entities'; //ContasAReceber, 
import { TextMasks } from 'src/app/common/mask/text-masks';
import { ContasAReceberFormComponent } from '../contas-a-receber-form/contas-a-receber-form.component';
import { DialogRealizarRecebimentoComponent } from '../contas-a-receber-form/dialog-realizar-recebimento/dialog-realizar-recebimento.component';


@Component({
    selector: 'app-contas-a-receber-list',
    templateUrl: './contas-a-receber-list.component.html',
    styleUrls: ['./contas-a-receber-list.component.scss']
})
export class ContasAReceberListComponent implements OnInit
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
        { name: 'numeroParcela', label: 'NÚMERO DA PARCELA', sortable: false },
        { name: 'modelo', label: 'MODELO', sortable: false },
        { name: 'serie', label: 'SERIE', sortable: false },
        { name: 'numeroNota', label: 'NUMERO DA NOTA', sortable: false },
        { name: 'cliente', label: 'FORNECEDOR', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'situacaoLiquidez', label: 'SITUAÇÃO DE LIQUIDEZ', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    public clientes: Cliente[] = [];

    constructor(public dialog: MatDialog,
        private contasAReceberService: ContasAReceberService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private _dialogService: TdDialogService,
        private clienteService: ClienteService) 
    {
        this.pageRequest = paginationService.pageRequest('modelo', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListContasAReceber(true);
        this.onListClientes("");
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

   public openForm(contasAReceber: ContasAReceber)
   {
       const dialogRef = this.dialog.open(ContasAReceberFormComponent, {
           width: '1200px',
           height: 'auto',
           data: {contasAReceber}
       });

       dialogRef.afterClosed().subscribe(() =>
       {
           this.onListContasAReceber();
       });
   }

   public openFormRecebimento(contaAReceber)
   {
        const dialogRef = this.dialog.open(DialogRealizarRecebimentoComponent, {
            width: 'auto',
            height: 'auto',
            data: contaAReceber
        });

        dialogRef.afterClosed().subscribe((result: ContasAReceber) =>
        {
            if(result){

                this.contasAReceberService.makeReceiveContaAReceber( result, true ).subscribe( result => {

                    this.openSnackBarService.openSuccess("Recebimento realizado com sucesso!")
                    this.onListContasAReceber();

                }, err => this.openSnackBarService.openError(err.message));
            }
        });
    }

    /**
      */
    public onListContasAReceber(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.contasAReceberService.listContasAReceberByFilters(
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


        this.onListContasAReceber();
    }


    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListContasAReceber(false);
    }

    public atualizarSituacaoContasAReceber(contasAReceber: ContasAReceber)
    {
        if(contasAReceber.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja desativar esta conta á receber ?",
                title: "Desativar conta á receber",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.contasAReceberService.updateSituacaoContaAReceber(contasAReceber, false).subscribe( result => {
                        this.openSnackBarService.openSuccess('Conta á receber desativada com sucesso.');
                        this.onListContasAReceber();
                    }, err => this.openSnackBarService.openError(err.message, 10000))
                }
            });
        }
        else
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta conta á receber ?",
                title: "Ativar conta á receber",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.contasAReceberService.updateSituacaoContaAReceber(contasAReceber, true).subscribe( result => {
                        this.openSnackBarService.openSuccess('Conta á receber ativada com sucesso.');
                        this.onListContasAReceber();
                    }, err => this.openSnackBarService.openError(err.message, 10000))
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
