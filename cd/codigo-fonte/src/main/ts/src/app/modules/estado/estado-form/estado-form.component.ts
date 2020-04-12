import { Estado, Pais } from './../../../../generated/entities';
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

  public estado: any = {codigo: 0};

  public pais: any = {};

  public title = "";

  public textMasks = TextMasks;

  public paises: Pais[];

  


  constructor(
    private estadoService: EstadoService,
    private paisService: PaisService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<EstadoFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.codigo != null)
    {
      this.onFindEstadoById(data.codigo);
    }

    this.onListPaises("");
  }

  ngOnInit()
  {

    if (this.data.codigo)
      this.title = "Alterar estado";
    else
      this.title = "Inserir estado";
      
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

 public onSubmit(form): void
  {

    if(form.invalid){
      this.openSnackBarService.openError(`Todos os campos com * devem ser preenchidos.`);
      return;
    }

    if(!this.estado.pais || (this.estado.pais && !this.estado.pais.codigo))
    {
      this.openSnackBarService.openError("O campo país deve ser preenchido.");
      return;
    }

    if (!this.estado.codigo)
    {
      this.estadoService.insertEstado(this.estado).subscribe(estado =>
      {
        this.openSnackBarService.openSuccess('Estado inserido com sucesso.');
        this.dialogRef.close(this.estado);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.estadoService.updateEstado(this.estado).subscribe(estado =>
      {
        this.openSnackBarService.openSuccess("Estado atualizado com sucesso.");
        this.dialogRef.close(this.estado);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }


 
  public onListPaises(filter)
  {
      this.paisService.listPaisesByFilters(filter ?filter : "", null).subscribe( page => {
      this.paises = page.content.filter( c => c.situacao); 
      })
  }

  public displayFnPais(pais?: Pais): string | undefined {
      return pais ? pais.pais : undefined;
  }

}
