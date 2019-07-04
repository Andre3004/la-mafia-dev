import { Component, OnInit } from '@angular/core';
import { FornecedorFormComponent } from '../fornecedor-form/fornecedor-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { FornecedorService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Fornecedor } from 'src/generated/entities';


@Component({
    selector: 'app-fornecedor-list',
    templateUrl: './fornecedor-list.component.html',
    styleUrls: ['./fornecedor-list.component.scss']
})
export class FornecedorListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        razaoSocial: '',

    }

    public tableColumns: ITdDataTableColumn[] = [
        { name: 'idFornecedor', label: 'CÓDIGO', sortable: false },
        { name: 'razaoSocial', label: 'RAZÃO SOCIAL', sortable: false },
        { name: 'celular', label: 'CELULAR', sortable: false },
        { name: 'cnpj', label: 'CNPJ', sortable: false },
        { name: 'endereco', label: 'ENDEREÇO', sortable: false },
        { name: 'telefone', label: 'TELEFONE', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 300 }
    ];

    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private fornecedorService: FornecedorService) 
    {
        this.pageRequest = paginationService.pageRequest('titulo', 'ASC', 10);
    }

    ngOnInit()
    {
        this.onListFornecedores();
    }

    public onListFornecedores(filters: Boolean = true): void
    {
        this.fornecedorService.listFornecedorsByFilters(
            this.filters.razaoSocial,
        ).subscribe((result) =>
        {
            this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
        }), (error) => { this.openSnackBarService.openError(error.message) }
    }
        


    public openForm(fornecedor)
    {
        const dialogRef = this.dialog.open(FornecedorFormComponent, {
            width: '800px',
            height: 'auto',
            data: { idFornecedor: fornecedor ? fornecedor.idFornecedor : null }
        });

        dialogRef.afterClosed().subscribe(fornecedorSaved =>
        {
            if(fornecedorSaved) this.onListFornecedores();
        });
    }

    public atualizarSituacaoFornecedor(fornecedor: Fornecedor)
    {
        this._dialogService.openConfirm({
            message: !fornecedor.situacao ? "Tem certeza que deseja ativar este fornecedor ? " : "Tem certeza que deseja desativar este fornecedor ? ",
            title: !fornecedor.situacao ? "Ativar fornecedor" : "Desativar fornecedor",
            cancelButton: 'CANCELAR',
            acceptButton: 'CONFIRMAR',
            width: '500px'
        }).afterClosed().subscribe((accept: boolean) =>
        {
            if (accept)
            {
                this.fornecedorService.updateSituacaoFornecedor(fornecedor.idFornecedor, !fornecedor.situacao).subscribe(result =>
                {
                    this.openSnackBarService.openSuccess(fornecedor.situacao ? 'Fornecedor desativado com sucesso.' : 'Fornecedor ativado com sucesso.');
                    this.onListFornecedores();
                }, err => this.openSnackBarService.openError(err.message))
            }
        });
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListFornecedores();
    }
  
}
