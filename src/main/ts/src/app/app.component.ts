import { UsuarioService } from './../generated/services';
import { Component } from '@angular/core';
import { Usuario } from 'src/generated/entities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';

  public usuario: Usuario = {};

  constructor(public usuarioService: UsuarioService)
  {
    
  }

  public onSaveUsuario()
  {
    this.usuarioService.insertUsuario(this.usuario).subscribe( result => {
      window.alert("Usuário salvo com sucesso!")
    }, err => console.log(err))
  }

  public onUpdateUsuario()
  {
    this.usuarioService.updateUsuario(this.usuario).subscribe( result => {
      window.alert("Usuário atualizado com sucesso!")
    }, err => console.log(err))
  }

  public onDeleteUsuario()
  {
    this.usuarioService.deleteUsuario(1).subscribe( result => {
      window.alert("Usuário excluido com sucesso!")
    }, err => console.log(err))
  }

  public onFindUsuarioById()
  {
    this.usuarioService.findUsuarioById(1).subscribe( result => {
      this.usuario = result;
      window.alert(result.nome)
    }, err => console.log(err))
  }
}
