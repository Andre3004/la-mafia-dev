import { PaisFormComponent } from './../pais-form/pais-form.component';
import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/generated/services';


import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService, ITdDataTableColumn, IPageChangeEvent } from '@covalent/core';
import { PaginationService } from 'src/app/common/pagination/pagination.service';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Pais } from 'src/generated/entities';


@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.scss']
})
export class PaisListComponent implements OnInit {

  public pageRequest: any = [];

  public filters = {
      pais: '',

  }
  public tableColumns: ITdDataTableColumn[] = [
    { name: 'idPais', label: 'CÓDIGO' },
    { name: 'pais', label: 'PAÍS' },
    { name: 'sigla', label: 'SIGLA'  },
    { name: 'ddi', label: 'DDI' },
    { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
    { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES',  width: 250 }
];

constructor(public dialog: MatDialog,
  private _dialogService: TdDialogService,
  private paginationService: PaginationService,
  private openSnackBarService: OpenSnackBarService,
  private paisService: PaisService) 
{

  this.pageRequest = paginationService.pageRequest('idPais', 'ASC', 10);

 

}


  ngOnInit()
  {
      this.onListPaises();
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  /**
   * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
   */
  public onListPaises(filters: Boolean = true): void
  {
  

      this.paisService.listPaisesByFilters(
          this.filters.pais,
          this.pageRequest.pageable
      ).subscribe((result) =>
      {
          this.pageRequest = this.paginationService.fixPageRequest(result, this.pageRequest);
      }), (error) => { this.openSnackBarService.openError(error.message) }
  }

  public openForm(pais)
  {
      const dialogRef = this.dialog.open(PaisFormComponent, {
          width: '600px',
          height: 'auto',
          data: { idPais: pais ? pais.idPais : null }
      });

      dialogRef.afterClosed().subscribe(paisSaved =>
      {
          if(paisSaved) this.onListPaises();
      });
  }


  public atualizarSituacaoPais(pais: Pais)
    {
        if(pais.situacao)
        {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este país ?",
                title: "Excluir país" ,
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.paisService.deletePais(pais.idPais).subscribe( result => {
                        this.openSnackBarService.openSuccess('País excluído com sucesso.');
                        this.onListPaises();
                    }, err => {


                        this._dialogService.openConfirm({
                            message: "Não foi possível excluir este país pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar país",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe((accept: boolean) =>
                        {
                            if (accept)
                            {
                                this.paisService.updateSituacaoPais(pais.idPais, !pais.situacao).subscribe( result => {
                                    this.openSnackBarService.openSuccess('País desativado com sucesso.');
                                    this.onListPaises();
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
                message: "Tem certeza que deseja ativar esta país ?",
                title: "Ativar país",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe((accept: boolean) =>
            {
                if (accept)
                {
                    this.paisService.updateSituacaoPais(pais.idPais, !pais.situacao).subscribe( result => {
                        this.openSnackBarService.openSuccess('País ativado com sucesso.');
                        this.onListPaises();
                    }, err => this.openSnackBarService.openError(err.message))
                }
            });
        }
    }

    public page(pagingEvent: IPageChangeEvent)
    {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;

        this.onListPaises();
    }

}
