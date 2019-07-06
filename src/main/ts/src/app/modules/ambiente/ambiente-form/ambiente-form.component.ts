import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AmbienteService, ArquivoService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Franquia, AmbienteImagem } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ITdDataTableColumn } from '@covalent/core';

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

  public ambiente: Ambiente = { codigo:0, franquia: {}, ambienteImagems: [], mesas: [] };

  public fotoImage: any[] = [];

  public franquias: Franquia[];

  public textMasks = TextMasks;

  public imagemsRemoved = [];

  public mesas = [];

  public tableColumns: ITdDataTableColumn[] = [
      { name: 'numeroMesa', label: 'NÚMERO MESA', sortable: false },
      { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
  ];

  constructor(
    private ambienteService: AmbienteService,
    private franquiaService: FranquiaService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<AmbienteFormComponent>,
    private arquivoService: ArquivoService,
    private changeDetectionRef: ChangeDetectorRef,
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

      if(ambiente.ambienteImagems != null && ambiente.ambienteImagems.length > 0)
      {
        ambiente.ambienteImagems.forEach( ambienteImagem => this.fotoImage.push({base64: null}));
      }

    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    let anexoOld = null;

    if( !this.ambiente.franquia || (this.ambiente.franquia && !this.ambiente.franquia.codigo))
    {
      this.openSnackBarService.openError("O campo franquia deve ser selecionado.");
      return;
    }

    if( this.ambiente.ambienteImagems && this.ambiente.ambienteImagems.length > 0)
      this.ambiente.ambienteImagems = this.ambiente.ambienteImagems.filter(ambienteImagem => ambienteImagem.anexo)

    if (!this.ambiente.codigo)
    {
      this.ambienteService.insertAmbiente(this.ambiente).subscribe(ambiente =>
      {
        this.openSnackBarService.openSuccess("Ambiente salvo com sucesso.");
        this.dialogRef.close(this.ambiente);
        this.changeDetectionRef.detectChanges();
      }, err => {
        
        this.changeDetectionRef.detectChanges();
        this.openSnackBarService.openError(err.message)

      })
    }
    else
    {
      this.ambienteService.updateAmbiente(this.ambiente, this.imagemsRemoved).subscribe(ambiente =>
      {
        this.openSnackBarService.openSuccess("Ambiente atualizado com sucesso.");
        this.dialogRef.close(this.ambiente);
        this.changeDetectionRef.detectChanges();
      }, err => {
        // if(anexoOld) this.ambiente.anexo = anexoOld;
        this.changeDetectionRef.detectChanges();
        this.openSnackBarService.openError(err.message)
      })
    }

  }

  public onListFranquias(filter)
  {
    this.franquiaService.listFranquiasByFilters(filter ? filter : "", "", null).subscribe( franquiaPage => {
      this.franquias = franquiaPage.content.filter( c => c.situacao); 
    })
  }

  public displayFn(franquia?: Franquia): string | undefined {
    return franquia ? franquia.franquia : undefined;
  }

  /*-------------------------------------------------------------------
  *                           FOTO
  *-------------------------------------------------------------------*/
 
  public addImagemButton()
  {
    this.ambiente.ambienteImagems.push({});
    this.fotoImage.push({base64:null});
  }

  public removeAnexo(index)
  {
    if(this.ambiente.ambienteImagems[index].anexoUuid)
        this.imagemsRemoved.push(this.ambiente.ambienteImagems[index].codigo)

    this.ambiente.ambienteImagems.splice(index, 1);
    this.fotoImage.splice(index, 1);

  }

  public downloadFile(index)
  {
    this.arquivoService.downloadArquivoByUuid(this.ambiente.ambienteImagems[index].anexoUuid).subscribe(result =>
    {
      window.location.href = result;
    }, (exception) => this.openSnackBarService.openError(exception.message))
  }

  public setAmbienteImagemAnexo(event, index)
  {
    let ambienteImagem : AmbienteImagem = {};

    if (event.target.files[0])
    {
      if (event.target.files[0].size <= 10000000) //10MB
      {
        ambienteImagem.anexo = event.target;

        ambienteImagem.nomeArquivo = event.target.files[0].name;

        let reader = new FileReader();

        reader.onload = (event: any) =>
        {
          this.fotoImage[index].base64 = event.target.result;
        };
        ambienteImagem.anexoUuid = null;
        reader.readAsDataURL(event.target.files[0]);

        this.ambiente.ambienteImagems[index] = ambienteImagem;
      }
      else
      {
        this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
      }
    }
    else
    { 
      this.ambiente.ambienteImagems[index].anexo = null;
    }

  }

}
