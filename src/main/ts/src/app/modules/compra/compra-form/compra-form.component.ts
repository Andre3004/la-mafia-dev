import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ArquivoService, AmbienteService, FornecedorService } from 'src/generated/services'; //CompraService
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Ambiente, Usuario, Compra, Fornecedor } from 'src/generated/entities'; //Compra
import { TextMasks } from 'src/app/common/mask/text-masks';
import { PaginationService } from 'src/app/common/pagination/pagination.service';

@Component({
  selector: 'app-compra-form',
  templateUrl: './compra-form.component.html',
  styleUrls: ['./compra-form.component.scss']
})
export class CompraFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public compra: Compra = {};//Compra = { numeroCompra: 0 };

  public textMasks = TextMasks;

  public usuarioAutenticado: Usuario = {};

  public fornecedores: Fornecedor[] = [];

  public pageRequest: any = [];


  constructor(
    //private compraService: CompraService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<CompraFormComponent>,
    private arquivoService: ArquivoService,
    private paginationService: PaginationService,
    private fornecedorService: FornecedorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    // if (data.compraId != null)
    // {
    //  // this.onFindCompraByNumeroCompra(data.compraId);
    // }

    this.pageRequest = paginationService.pageRequest('modelo', 'ASC', 10);

  }

  ngOnInit()
  {
    if (this.data.compraId)
      this.title = "Alterar compra";
    else
      this.title = "Inserir compra";

      this.onListFornecedores("");

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/


  public onSubmit(): void
  {

    console.log(this.compra)

    // if (!this.compra.numeroCompra)
    // {
    //   this.compraService.insertCompra(this.compra).subscribe(compra =>
    //   {
    //     this.openSnackBarService.openSuccess("Compra salva com sucesso.");
    //     this.dialogRef.close(this.compra);
    //   }, err => {
        
    //     this.openSnackBarService.openError(err.message)

    //   })
    // }
    // else
    // {
    //   this.compraService.updateCompra(this.compra).subscribe(compra =>
    //   {
    //     this.openSnackBarService.openSuccess("Compra atualizada com sucesso.");
    //     this.dialogRef.close(this.compra);
    //   }, err => {
    //     this.openSnackBarService.openError(err.message)
    //   })
    // }

  }

   /////////////////MODEL

   public onListFornecedores(filter)
   {
       this.fornecedorService.listFornecedorsByFilters(filter ? filter : "", null).subscribe(page =>
       {
           this.fornecedores = page.content.filter(c => c.situacao);
       })
   }

   public displayFnFornecedor(fornecedor?: Fornecedor): string | undefined
   {
       return fornecedor ? fornecedor.razaoSocial : undefined;
   }

}
