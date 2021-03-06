import { Cliente, Cidade, Estado, Pais, CondicaoPagamento } from './../../../../generated/entities';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ClienteService, CidadeService, EstadoService, PaisService, CondicaoPagamentoService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { TextMasks } from 'src/app/common/mask/text-masks';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public cliente: Cliente = { codigo: 0, sexo: 'Masculino' };

  public maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  public maskTelefone = ['(', /\d/, /\d/, ')', ' ', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public maskCelular = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public cidades: Cidade[];

  public condicoesPagamento: CondicaoPagamento[];

  public dataHoje = new Date();

  public masks = TextMasks;


  constructor(
    private clienteService: ClienteService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<ClienteFormComponent>,
    private cidadeService: CidadeService,
    private condicaoPagamentoService: CondicaoPagamentoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.codigo != null)
    {
      this.onFindClienteById(data.codigo);
    }

    this.onListCidades("");
    this.onListCondicoesPagamento("");

  }

  ngOnInit()
  {
    if (this.data.codigo)
      this.title = "Alterar cliente";
    else
      this.title = "Inserir cliente";

  }

  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindClienteById(id: any)
  {
    this.clienteService.findClienteById(id).subscribe(cliente =>
    {
      this.cliente = cliente;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(form): void
  {

    if (!this.cliente.cidade)
    {
      this.openSnackBarService.openError('O campo cidade deve ser preenchido.');
      return;
    }

    if (!this.cliente.condicaoPagamento)
    {
      this.openSnackBarService.openError('O campo condição de pagamento deve ser preenchido.');
      return;
    }

    if (!form.invalid && this.cliente.dataNascimento)
    {

      this.cliente.estado = this.cliente.cidade.estado;
      this.cliente.pais = this.cliente.cidade.estado.pais;

      if (this.cliente.cpf && typeof this.cliente.cpf == "string")
      {
        this.cliente.cpf = this.cliente.cpf.replace(/\.|-/gi, '');

        if (!this.validaCPF(this.cliente.cpf))
        {
          this.openSnackBarService.openError('CPF inválido.');
          return;
        }
      }

      if (this.cliente.telefone)
      {
        var numb = this.cliente.telefone.match(/\d/g) as any;
        numb = numb.join("").toString();

        if (numb.length != 10)
        {
          this.openSnackBarService.openError('telefone inválido.');
          return;
        }
      }

      if (this.cliente.celular) 
      {
        var numb = this.cliente.celular.match(/\d/g) as any;
        numb = numb.join("").toString();

        if (numb.length != 11)
        {
          this.openSnackBarService.openError('celular inválido.');
          return;
        }
      }
      else
      {
        this.cliente.telefone = this.cliente.telefone.replace(/\.|-/gi, '');
        this.cliente.celular = this.cliente.celular.replace(/\.|-/gi, '');

      }

      if (!this.cliente.codigo)
      {
        this.clienteService.insertCliente(this.cliente).subscribe(cliente =>
        {
          this.openSnackBarService.openSuccess("Cliente salvo");
          this.dialogRef.close(this.cliente);
        }, err => this.openSnackBarService.openError(err.message))
      }
      else
      {
        this.clienteService.updateCliente(this.cliente).subscribe(cliente =>
        {
          this.openSnackBarService.openSuccess("Cliente atualizado");
          this.dialogRef.close(this.cliente);
        }, err => this.openSnackBarService.openError(err.message))
      }

    }
    else{
      this.openSnackBarService.openError(`Todos os campos com * devem ser preenchidos.`)
    }

    

  }



  private validaCPF(cpf)
  {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999")
      return false;
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return false;
    return true;
  }


  public onListCidades(filter)
  {
    this.cidadeService.listCidadesByFilters(filter ? filter : "", null).subscribe(page =>
    {

      this.cidades = page.content.filter(c => c.situacao);
    })
  }

  public displayFnCidade(cidade?: Cidade): string | undefined
  {
    return cidade ? cidade.cidade : undefined;
  }

  public onListCondicoesPagamento(filter)
  {
    var codigo = null;
    var condicaoPagamento = "";

    if (isNaN(parseInt(filter))) condicaoPagamento = filter ? filter : "";
    else codigo = parseInt(filter)

    this.condicaoPagamentoService.listCondicaoPagamentosByFilters(codigo, condicaoPagamento, null).subscribe(page =>
    {
      this.condicoesPagamento = page.content.filter(c => c.situacao);
    })
  }

  public displayFnCondicaoPagamento(condicaoPagamento?: CondicaoPagamento): number | undefined
  {
    return condicaoPagamento ? condicaoPagamento.codigo : undefined;
  }

}
