import { Estado } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { EstadoService } from 'src/generated/services';
import { PaisService } from 'src/generated/services';

import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-estado-form',
  templateUrl: './estado-form.component.html',
  styleUrls: ['./estado-form.component.scss']
})
export class EstadoFormComponent implements OnInit {

  public estado: any = {idEstado: 0};

  public pais: any = {};

  public title = "";

  public textMasks = TextMasks;



  constructor(
    private estadoService: EstadoService,
    private paisService: PaisService,

    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<EstadoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.idEstado != null)
    {
      this.onFindEstadoById(data.idEstado);
    }
  }

  ngOnInit()
  {

    if (this.data.idEstado)
      this.title = "Alterar estado";
    else
      this.title = "Inserir estado";
      
    this.paisService.listPaisesByFilters
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindEstadoById(id: any)
  {
    this.estadoService.findEstadoById(id).subscribe(estado =>
    {
      this.estado = estado;
    }, err => this.openSnackBarService.openError(err.message))

  }

 public onSubmit(): void
  {


    if (!this.estado.idEstado)
    {
      this.estadoService.insertEstado(this.estado).subscribe(estado =>
      {
        this.dialogRef.close(this.estado);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.estadoService.updateEstado(this.estado).subscribe(estado =>
      {
        this.openSnackBarService.openSuccess("Estado atualizado.");
        this.dialogRef.close(this.estado);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }


 





}
