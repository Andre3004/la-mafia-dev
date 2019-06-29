import { Component, OnInit, Inject, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AmbienteService, ArquivoService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Franquia, AmbienteImagem } from 'src/generated/entities';
import { TextMasks } from 'src/app/common/mask/text-masks';
import { DragScrollComponent } from 'ngx-drag-scroll';

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

  public ambiente: Ambiente = { franquia: {}, ambienteImagems: [] };

  public fotoImage: any[] = [];

  public franquias: Franquia[];

  public textMasks = TextMasks;

  public imagemsRemoved = [];
  
  public images = [
    "https://dqqzjdqmiszdy.cloudfront.net/sites/default/files/html5_assets/frames_minions_char_3_mob.png",
    "http://i2.wp.com/farm1.staticflickr.com/502/19162022903_f8cd8501af.jpg?resize=500%2C271&ssl=1",
    "https://i.pinimg.com/736x/78/1d/29/781d2914510339a762267ed4913cb62b.jpg",
    "https://www.losminionsaldia.com/images/mas-minions/minion.png"
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

    if( !this.ambiente.franquia || (this.ambiente.franquia && !this.ambiente.franquia.id))
    {
      this.openSnackBarService.openError("O campo franquia deve ser selecionado.");
      return;
    }

    if( this.ambiente.ambienteImagems && this.ambiente.ambienteImagems.length > 0)
      this.ambiente.ambienteImagems = this.ambiente.ambienteImagems.filter(ambienteImagem => ambienteImagem.anexo)

    if (!this.ambiente.id)
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
 
  public addImagemButton()
  {
    this.ambiente.ambienteImagems.push({});
    this.fotoImage.push({base64:null});
  }

  public removeAnexo(index)
  {
    if(this.ambiente.ambienteImagems[index].anexoUuid)
        this.imagemsRemoved.push(this.ambiente.ambienteImagems[index].id)

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
