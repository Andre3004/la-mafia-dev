import { UsuarioService } from './../generated/services';
import { Component } from '@angular/core';
import { Usuario } from 'src/generated/entities';
import { AutenticacaoService } from './common/autenticacao/autenticacao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'projeto';

  constructor(
    private autenticacaoService: AutenticacaoService
  )
  {
  }

  ngOnInit()
  {
    this.autenticacaoService.usuarioAutenticado();
  }
}
