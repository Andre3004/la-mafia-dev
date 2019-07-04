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



  constructor(
    private paisService: PaisService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<PaisFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.idPais != null)
    {
      this.onFindPaisById(data.idPais);
    }
  }

  ngOnInit()
  {

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

 public onSubmit(): void
  {


    if (!this.pais.idPais)
    {
      this.paisService.insertPais(this.pais).subscribe(pais =>
      {
        this.dialogRef.close(this.pais);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.paisService.updatePais(this.pais).subscribe(pais =>
      {
        this.openSnackBarService.openSuccess("País atualizado.");
        this.dialogRef.close(this.pais);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }


 





}
