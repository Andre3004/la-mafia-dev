import { Component, OnInit } from '@angular/core';
import { UsuarioFormComponent } from '../usuario-form/usuario-form.component';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { TdDialogService } from '@covalent/core';

declare var require: any

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit
{

  public usuarios: any = [];

  public filters = {
    nome: null,
    situacao: null,
    email: null
  }

  constructor(public dialog: MatDialog, private http: HttpClient, private _dialogService: TdDialogService) { }

  ngOnInit()
  {
    this.usuarios = require('../../../db/usuario.json');
  }

  public openForm(usuario)
  {
    const dialogRef = this.dialog.open(UsuarioFormComponent, {
      width: '600px',
      height: 'auto',
      data: {usuario: usuario}
    });

    dialogRef.afterClosed().subscribe(usuarioSaved =>
    {
      if(usuarioSaved && usuarioSaved.id)
      {
        let index = this.usuarios.map(usuario => usuario.id).indexOf(usuarioSaved.id);

        this.usuarios[index] = usuarioSaved;
      }
      else
      {
        usuarioSaved.situacao = "Ativo"
        this.usuarios.push(usuarioSaved);
      }
    });
  }


  public atualizarSituacaoUsuario(usuario, situacao)
  {
    this._dialogService.openConfirm({
      message: situacao == 'Ativo' ?  "Tem certeza que deseja ativar este usuário ? " : "Tem certeza que deseja desativar este usuário ? ", 
      title: situacao == 'Ativo' ?  "Ativar usuário" : "Desativar usuário", 
      cancelButton: 'CANCELAR', 
      acceptButton: 'CONFIRMAR', 
      width: '500px'
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        usuario.situacao = situacao;
      } 
    });

    
  }
}
