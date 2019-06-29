import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsuarioService } from 'src/generated/services';
import { OpenSnackBarService } from 'src/app/common/open-snackbar/open-snackbar.service';

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

  public usuario: any = {};

  public maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

  public maskTelefone = ['+', /\d/, /\d/, /\d/, ' ', '(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public confSenha = null;


  constructor(
    private usuarioService: UsuarioService,
    private openSnackBarService: OpenSnackBarService,
    public dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if (data.usuarioId != null)
    {
      this.onFindUsuarioById(data.usuarioId);
    }
  }

  ngOnInit()
  {
    if (this.data.usuarioId)
      this.title = "Alterar usuário";
    else
      this.title = "Inserir usuário";
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
        numb = numb.join("").toString();

        if(numb.length != 14)
        {
          this.openSnackBarService.openError('O campo telefone está inválido.');
          return;
        }
    }
    else
    {
      this.usuario.telefone = this.usuario.telefone.replace(/\.|-/gi, '');
    }

    if (this.usuario.senha && (this.usuario.senha != this.confSenha) )
    {
        this.openSnackBarService.openError('O campo senha e confimação não conferem.');
        return;
    }

    if (!this.usuario.id)
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


}
