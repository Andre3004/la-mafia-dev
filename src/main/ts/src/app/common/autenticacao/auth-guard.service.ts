import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { AutenticacaoService } from './autenticacao.service';
import { UsuarioService } from 'src/generated/services';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from 'src/generated/entities';
import { OpenSnackBarService } from '../open-snackbar/open-snackbar.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{


  constructor(private open: OpenSnackBarService,  private autenticacaoService: AutenticacaoService, private usuarioService: UsuarioService, private _router: Router) 
  {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {

    if (this.autenticacaoService.usuario)
    {
      if (next.data.onlyFranquiador && !this.autenticacaoService.isFranquiado || !next.data.onlyFranquiador && this.autenticacaoService.isFranquiado || next.data.ambos)
      {
        return true;
      }

      this.open.openError("Acesso negado, consulte o administrador.");
      this._router.navigate(['/produto']);
      return false;
    }
    else
    {
      return this.usuarioService.getAuthenticatedUser().pipe(

        map((usuario: Usuario) =>
        {
          if (( next.data.onlyFranquiador && !(usuario.perfilUsuario == 'FRANQUEADO') || 
               !next.data.onlyFranquiador && usuario.perfilUsuario == 'FRANQUEADO') || 
               next.data.ambos)
          {
            return true;
          }
    
          this.open.openError("Acesso negado, consulte o administrador.");
          this._router.navigate(['/produto']);
          return false;
        }),
        catchError((err) =>
        {
          return of(false);
        })
      );
    }
  }

}