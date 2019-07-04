import { Cidade } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CidadeService } from 'src/generated/services';
import { PaisService } from 'src/generated/services';

import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.scss']
})
export class CidadeFormComponent implements OnInit {

  public cidade: any = { idCidade: 0};

  public title = "";

  public textMasks = TextMasks;

  constructor(
    private cidadeService: CidadeService,
    private paisService: PaisService,

    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<CidadeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.idCidade != null)
    {
      this.onFindCidadeById(data.idCidade);
    }
  }

  ngOnInit()
  {
    if (this.data.idCidade)
      this.title = "Alterar cidade";
    else
      this.title = "Inserir cidade";

    this.paisService.listPaisesByFilters("", null);
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindCidadeById(id: any)
  {
    this.cidadeService.findCidadeById(id).subscribe(cidade =>
    {
      this.cidade = cidade;
    }, err => this.openSnackBarService.openError(err.message))

  }

 public onSubmit(): void
  {


    if (!this.cidade.idCidade)
    {
      this.cidadeService.insertCidade(this.cidade).subscribe(cidade =>
      {
        this.dialogRef.close(this.cidade);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.cidadeService.updateCidade(this.cidade).subscribe(cidade =>
      {
        this.openSnackBarService.openSuccess("Cidade atualizado.");
        this.dialogRef.close(this.cidade);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }


 





}
