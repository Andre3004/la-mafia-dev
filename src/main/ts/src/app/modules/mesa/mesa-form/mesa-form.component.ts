import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MesaService, ArquivoService, AmbienteService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Mesa, Ambiente } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-mesa-form',
  templateUrl: './mesa-form.component.html',
  styleUrls: ['./mesa-form.component.scss']
})
export class MesaFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public mesa: Mesa = { numeroMesa: 0 };

  public ambientes: Ambiente[];

  public textMasks = TextMasks;

  constructor(
    private mesaService: MesaService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<MesaFormComponent>,
    private arquivoService: ArquivoService,
    private ambienteService: AmbienteService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.mesaId != null)
    {
      this.onFindMesaByNumeroMesa(data.mesaId);
    }
  }

  ngOnInit()
  {
    if (this.data.mesaId)
      this.title = "Alterar mesa";
    else
      this.title = "Inserir mesa";

    this.onListAmbientes("");
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindMesaByNumeroMesa(numeroMesa: any)
  {
    this.mesaService.findMesaByNumeroMesa(numeroMesa).subscribe(mesa =>
    {
      this.mesa = mesa;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    if(!this.mesa.ambiente || (this.mesa.ambiente && !this.mesa.ambiente.codigo))
    {
      this.openSnackBarService.openError("O campo ambiente é obrigatório.");
      return;
    }

    if (!this.mesa.numeroMesa)
    {
      this.mesaService.insertMesa(this.mesa).subscribe(mesa =>
      {
        this.openSnackBarService.openSuccess("Mesa salva com sucesso.");
        this.dialogRef.close(this.mesa);
      }, err => {
        
        this.openSnackBarService.openError(err.message)

      })
    }
    else
    {
      this.mesaService.updateMesa(this.mesa).subscribe(mesa =>
      {
        this.openSnackBarService.openSuccess("Mesa atualizada com sucesso.");
        this.dialogRef.close(this.mesa);
      }, err => {
        this.openSnackBarService.openError(err.message)
      })
    }

  }

  public onListAmbientes(filter)
  {
      this.ambienteService.listAmbientesByFilters(filter ? filter : "", null)
          .subscribe( ambientePage => 
      {
          this.ambientes = ambientePage.content; 
      })
  }

  public displayFn(ambiente?: Ambiente): string | undefined {
      return ambiente ? ambiente.ambiente : undefined;
  }

}
