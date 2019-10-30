import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService, FranquiaService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';
import { Franquia, Usuario, PerfilUsuario, PerfilUsuarioValues } from 'src/generated/entities';
import { AutenticacaoService } from 'src/app/common/autenticacao/autenticacao.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit
{


  /*-------------------------------------------------------------------
    *                           ATTRIBUTES
    *-------------------------------------------------------------------*/

  public title = "";

  public usuario: Usuario = { franquia: {}, perfilUsuario: 'FRANQUIADO' };

  public maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  public maskTelefone = ['+', /\d/, /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public confSenha = null;

  public franquias: Franquia[];

  public type: PerfilUsuario;

  constructor(
    private usuarioService: UsuarioService,
    private openSnackBarService: OpenSnackBarService,
    private franquiaService: FranquiaService,
    public dialogRef: MatDialogRef<UsuarioFormComponent>,
    private autenticacaoService: AutenticacaoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.usuarioId != null)
    {
      this.onFindUsuarioById(data.usuarioId);
    }

    this.onListFranquias("");
  }



  async ngOnInit()
  {
    if (this.data.usuarioId)
      this.title = "Alterar usuário";
    else
      this.title = "Inserir usuário";

    this.type = this.autenticacaoService.usuario.perfilUsuario;
  }




  /*-------------------------------------------------------------------
  *                           BEHAVIORS
  *-------------------------------------------------------------------*/

  private onFindUsuarioById(usuarioId: any)
  {
    this.usuarioService.findUsuarioById(usuarioId).subscribe(usuario =>
    {
      this.usuario = usuario;
    }, err => this.openSnackBarService.openError(err.message))

  }

  public onSubmit(): void
  {

    if (!this.usuario.franquia || (this.usuario.franquia && !this.usuario.franquia.codigo))
    {
      this.openSnackBarService.openError("O campo franquia deve ser preenchido.");
      return;
    }

    if (typeof this.usuario.cpf == "string")
    {
      this.usuario.cpf = this.usuario.cpf.replace(/\.|-/gi, '');

      if (!this.validaCPF(this.usuario.cpf))
      {
        this.openSnackBarService.openError('O campo CPF está inválido.');
        return;
      }
    }


    if (this.usuario.telefone) 
    {
      var numb = this.usuario.telefone.match(/\d/g);
      var numbString = numb.join("").toString();

      if (numbString.length != 14)
      {
        this.openSnackBarService.openError('O campo telefone está inválido.');
        return;
      }
    }
    else
    {
      this.usuario.telefone = this.usuario.telefone.replace(/\.|-/gi, '');
    }

    if (this.usuario.senha && (this.usuario.senha != this.confSenha))
    {
      this.openSnackBarService.openError('O campo senha e confimação não conferem.');
      return;
    }

    if (!this.usuario.codigo)
    {
      this.usuarioService.insertUsuario(this.usuario).subscribe(usuario =>
      {
        this.openSnackBarService.openSuccess("Usuario salvo com sucesso.");
        this.dialogRef.close(this.usuario);
      }, err => this.openSnackBarService.openError(err.message))
    }
    else
    {
      this.usuarioService.updateUsuario(this.usuario).subscribe(usuario =>
      {
        this.openSnackBarService.openSuccess("Usuario atualizado com sucesso.");
        this.dialogRef.close(this.usuario);
      }, err => this.openSnackBarService.openError(err.message))
    }

  }


  /**
     * Método para validar o cpf do usuário
     * fonte: https://www.geradorcpf.com/javascript-validar-cpf.htm
     * @param strCPF
     */
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


  public onListFranquias(filter)
  {
    this.franquiaService.listFranquiasByFilters(filter ? filter : "", "", null).subscribe(franquiaPage =>
    {
      this.franquias = franquiaPage.content.filter(c => c.situacao);
    })
  }

  public displayFn(franquia?: Franquia): string | undefined
  {
    return franquia ? franquia.franquia : undefined;
  }

}
