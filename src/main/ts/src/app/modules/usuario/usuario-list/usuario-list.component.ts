import { Component, OnInit } from '@angular/core';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { UsuarioService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Usuario } from 'src/generated/entities';


@Component({
    selector: 'app-usuario-list',
    templateUrl: './usuario-list.component.html',
    styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit
{

    /*-------------------------------------------------------------------
      *                           ATTRIBUTES
      *-------------------------------------------------------------------*/

    public pageRequest: any = [];

    public filters = {
        nome: '',
        situacao: null,
        email: ''
    }

    /**
       * Colunas da Grid
       */
    public tableColumns: ITdDataTableColumn[] = [
        { name: 'codigo', label: 'CÓDIGO', sortable: false },
        { name: 'nome', label: 'USUÁRIO', sortable: false },
        { name: 'email', label: 'E-MAIL', sortable: false },
        { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
    ];

    /**
     * 
     * @param dialog 
     * @param _dialogService 
     * @param paginationService 
     * @param openSnackBarService 
     * @param usuarioService 
     */
    constructor(public dialog: MatDialog,
        private _dialogService: TdDialogService,
        private paginationService: PaginationService,
        private openSnackBarService: OpenSnackBarService,
        private usuarioService: UsuarioService) 
    {
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 5);
    }

    ngOnInit()
    {
        this.onListUsuarios();
    }

    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/

    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    public onListUsuarios(filters: Boolean = true): void
    {
        if (filters)
        {
            this.pageRequest.pageable.page = 0;
        }

        this.usuarioService.listUsuariosByFilters(
            this.filters.nome,
            this.filters.situacao,
            this.filters.email,
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
            situacao: null,
            email: ''
        }
        
        this.onListUsuarios();
    }


    public openForm(usuario)
    {
        const dialogRef = this.dialog.open(UsuarioFormComponent, {
            width: '600px',
            height: 'auto',
            data: { usuarioId: usuario ? usuario.codigo : null }
        });

        dialogRef.afterClosed().subscribe(usuarioSaved =>
        {
            if(usuarioSaved) this.onListUsuarios();
        });
    }


    public atualizarSituacaoUsuario(usuario: Usuario)
    {
        if(usuario.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este usuario ?",
                title: "Excluir usuario" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.usuarioService.deleteUsuario(usuario.codigo).subscribe( result => {
                        this.openSnackBarService.openSuccess('Usuario excluído com sucesso.');
                        this.onListUsuarios();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este usuario pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar usuario",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.usuarioService.updateSituacaoUsuario(usuario.codigo, !usuario.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('Usuario desativado com sucesso.');
                                    this.onListUsuarios();
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
                message: "Tem certeza que deseja ativar esta usuario ?",
                title: "Ativar usuario",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.usuarioService.updateSituacaoUsuario(usuario.codigo, !usuario.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('Usuario ativado com sucesso.');
                        this.onListUsuarios();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListUsuarios(false);
    }
}
