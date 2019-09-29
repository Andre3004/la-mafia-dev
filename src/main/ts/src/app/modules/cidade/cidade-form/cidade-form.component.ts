import { Cidade, Estado } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CidadeService, EstadoService } from 'src/generated/services';
import { PaisService } from 'src/generated/services';

import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.scss']
})
export class CidadeFormComponent implements OnInit {

  public cidade: Cidade = { codigo: 0};

  public title = "";

  public textMasks = TextMasks;

  public estados: Estado[];

  constructor(
    private cidadeService: CidadeService,
    private paisService: PaisService,
    private estadoService: EstadoService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<CidadeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.codigo != null)
    {
      this.onFindCidadeById(data.codigo);
    }
  }

  ngOnInit()
  {
    if (this.data.codigo)
      this.title = "Alterar cidade";
    else
      this.title = "Inserir cidade";

    this.paisService.listPaisesByFilters("", null);
    this.onListEstados("");
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

    if(!this.cidade.estado || (this.cidade.estado && !this.cidade.estado.codigo))
    {
      this.openSnackBarService.openError("O campo estado deve ser preenchido.");
      return;
    }
    
    if (!this.cidade.codigo)
    {
      this.cidadeService.insertCidade(this.cidade).subscribe(cidade =>
      {
        this.openSnackBarService.openSuccess("Cidade inserida com sucesso.");
        this.dialogRef.close(this.cidade);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.cidadeService.updateCidade(this.cidade).subscribe(cidade =>
      {
        this.openSnackBarService.openSuccess("Cidade atualizada com sucesso.");
        this.dialogRef.close(this.cidade);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }

  public onListEstados(filter)
  {
      this.estadoService.listEstadosByFilters(filter ? filter : "", null).subscribe( page => {
      this.estados = page.content.filter( c => c.situacao);
      })
  }

  public displayFnEstado(estado?: Estado): string | undefined {
      return estado ? estado.estado : undefined;
  }

 





}
