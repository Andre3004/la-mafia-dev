import { Pais } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PaisService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-pais-form',
  templateUrl: './pais-form.component.html',
  styleUrls: ['./pais-form.component.scss']
})
export class PaisFormComponent implements OnInit {

  public pais: any = {};
  
  public textMasks = TextMasks;

  public title = "";


  constructor(
    private paisService: PaisService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<PaisFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.codigo != null)
    {
      this.onFindPaisById(data.codigo);
    }
  }

  ngOnInit()
  {
    if (this.data.codigo)
      this.title = "Alterar país";
    else
      this.title = "Inserir país";

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindPaisById(id: any)
  {
    this.paisService.findPaisById(id).subscribe(pais =>
    {
      this.pais = pais;
    }, err => this.openSnackBarService.openError(err.message))

  }

 public onSubmit(form): void
  {

    if(form.invalid){
      this.openSnackBarService.openError(`Todos os campos com * devem ser preenchidos.`);
      return;
    }

    if (!this.pais.codigo)
    {
      this.paisService.insertPais(this.pais).subscribe(pais =>
      {
        this.openSnackBarService.openSuccess("País inserido com sucesso.");
        this.dialogRef.close(this.pais);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.paisService.updatePais(this.pais).subscribe(pais =>
      {
        this.openSnackBarService.openSuccess("País atualizado com sucesso.");
        this.dialogRef.close(this.pais);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }


 





}
