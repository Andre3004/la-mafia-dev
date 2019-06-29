import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AmbienteService, ArquivoService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Franquia } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-ambiente-form',
  templateUrl: './ambiente-form.component.html',
  styleUrls: ['./ambiente-form.component.scss']
})
export class AmbienteFormComponent implements OnInit
{ 
  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public ambiente: Ambiente = { franquia: {} };

  // public fotoImage: any;

  public franquias: Franquia[];

  public textMasks = TextMasks;
  
  constructor(
    private ambienteService: AmbienteService,
    private franquiaService: FranquiaService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<AmbienteFormComponent>,
    private arquivoService: ArquivoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.ambienteId != null)
    {
      this.onFindAmbienteById(data.ambienteId);
    }

    this.onListFranquias("");
  }

  ngOnInit()
  {
    if (this.data.ambienteId)
      this.title = "Alterar ambiente";
    else
      this.title = "Inserir ambiente";
  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindAmbienteById(ambienteId: any)
  {
    this.ambienteService.findAmbienteById(ambienteId).subscribe(ambiente =>
    {
      this.ambiente = ambiente;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    let anexoOld = null;

    if( !this.ambiente.franquia || (this.ambiente.franquia && !this.ambiente.franquia.id))
    {
      this.openSnackBarService.openError("O campo franquia deve ser selecionado.");
      return;
    }

    // if(this.ambiente.anexo && typeof(this.ambiente.anexo) == 'string')
    // {
    //   anexoOld = this.ambiente.anexo;
    //   this.ambiente.anexo = null;
    // }

    if (!this.ambiente.id)
    {
      this.ambienteService.insertAmbiente(this.ambiente).subscribe(ambiente =>
      {
        this.openSnackBarService.openSuccess("Ambiente salvo com sucesso.");
        this.dialogRef.close(this.ambiente);
      }, err => {
        
        // if(anexoOld) this.ambiente.anexo = anexoOld;

        this.openSnackBarService.openError(err.message)

      })
    }
    else
    {
      this.ambienteService.updateAmbiente(this.ambiente).subscribe(ambiente =>
      {
        this.openSnackBarService.openSuccess("Ambiente atualizado com sucesso.");
        this.dialogRef.close(this.ambiente);
      }, err => {
        // if(anexoOld) this.ambiente.anexo = anexoOld;
        this.openSnackBarService.openError(err.message)
      })
    }

  }

  public onListFranquias(filter)
  {
    this.franquiaService.listFranquiasByFilters(filter ? filter : "", "", "", null).subscribe( franquiaPage => {
      this.franquias = franquiaPage.content; 
    })
  }

  public displayFn(franquia?: Franquia): string | undefined {
    return franquia ? franquia.nome : undefined;
  }

  /*-------------------------------------------------------------------
  *                           FOTO
  *-------------------------------------------------------------------*/



  // public removeAnexo()
  // {
  //   this.ambiente.anexo = null;
  //   this.ambiente.anexoUuid = null;
  //   this.fotoImage = null;
  //   this.ambiente.nomeArquivo = null;
  // }

  // public downloadFile()
  // {
  //   this.arquivoService.downloadArquivoByUuid(this.ambiente.anexoUuid).subscribe(result =>
  //   {
  //     window.location.href = result;
  //   }, (exception) => this.openSnackBarService.openError(exception.message))
  // }

  // public setAmbienteAnexo(event)
  // {
  //   if (event.target.files[0])
  //   {
  //     if (event.target.files[0].size <= 10000000) //10MB
  //     {
  //       this.ambiente.anexo = event.target;

  //       this.ambiente.nomeArquivo = event.target.files[0].name;

  //       let reader = new FileReader();

  //       reader.onload = (event: any) =>
  //       {
  //         this.fotoImage = event.target.result;
  //       };
  //       this.ambiente.anexoUuid = null;
  //       reader.readAsDataURL(event.target.files[0]);
  //     }
  //     else
  //     {
  //       this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
  //     }
  //   }
  //   else
  //   {
  //     this.ambiente.anexo = null;
  //   }
  // }

}
