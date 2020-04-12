import { Injectable } from '@angular/core';
import { Usuario } from 'src/generated/entities';
import { UsuarioService } from 'src/generated/services';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService
{
    private _usuario: Usuario;

    private usuarioPromisse


    constructor(private usuarioService: UsuarioService) 
    {
        this.usuarioAutenticado().then(result =>{
            this._usuario = result;
        });
    }

    public usuarioAutenticado(): Promise<Usuario>
    {
        if (!this.usuarioPromisse)
            this.usuarioPromisse = this.usuarioService.getAuthenticatedUser().toPromise();

        return this.usuarioPromisse;
    }


    get isFranquiado(): boolean
    {
        if (!this._usuario)
            this.usuarioAutenticado().then((usuario) =>
            {
                return usuario.perfilUsuario == 'FRANQUEADO'
            })
        else
        {
            return this._usuario.perfilUsuario == 'FRANQUEADO'
        }
    }

    get usuario(): Usuario
    {
        if (!this._usuario)
            this.usuarioAutenticado().then((usuario) =>
            {
                return usuario;
            })
        else
        {
            return this._usuario;
        }
    }

}
