import { Component, OnInit } from '@angular/core';
import { FornecedorFormComponent } from '../fornecedor-form/fornecedor-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { FornecedorService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Fornecedor } from 'src/generated/entities';
import { AutenticacaoService } from 'src/app/common/autenticacao/autenticacao.service';


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
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'razaoSocial', label: 'RAZÃO SOCIAL', sortable: false },
        { name: 'celular', label: 'CELULAR', sortable: false },
        { name: 'cnpj', label: 'CNPJ', sortable: false },
        { name: 'endereco', label: 'ENDEREÇO', sortable: false },
        { name: 'telefone', label: 'TELEFONE', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 300 }
    ];

    public isFranquiado = false;

    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private autenticacaoService: AutenticacaoService,
        private fornecedorService: FornecedorService) 
    {
        this.pageRequest = paginationService.pageRequest('titulo', 'ASC', 10);
    }

    async ngOnInit()
    {
        this.onListFornecedores();

        this.autenticacaoService.usuarioAutenticado().then( result => {
            this.isFranquiado = this.autenticacaoService.isFranquiado;
        });
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
            width: '1000px',
            height: 'auto',
            data: { codigo: fornecedor ? fornecedor.codigo : null }
        });

        dialogRef.afterClosed().subscribe(fornecedorSaved =>
        {
            if(fornecedorSaved) this.onListFornecedores();
        });
    }

    public atualizarSituacaoFornecedor(fornecedor: Fornecedor)
    {
        if(fornecedor.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este fornecedor ?",
                title: "Excluir fornecedor" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.fornecedorService.deleteFornecedor(fornecedor.codigo).subscribe( result => {
                        this.openSnackBarService.openSuccess('Fornecedor excluído com sucesso.');
                        this.onListFornecedores();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este fornecedor pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar fornecedor",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.fornecedorService.updateSituacaoFornecedor(fornecedor.codigo, !fornecedor.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('Fornecedor desativado com sucesso.');
                                    this.onListFornecedores();
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
                message: "Tem certeza que deseja ativar este fornecedor ?",
                title: "Ativar fornecedor",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.fornecedorService.updateSituacaoFornecedor(fornecedor.codigo, !fornecedor.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Fornecedor ativado com sucesso.');
                        this.onListFornecedores();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListFornecedores();
    }
  
}
