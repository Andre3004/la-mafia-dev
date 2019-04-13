import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit
{

  public title = "";

  public usuario : any = {};

  constructor(
    public dialogRef: MatDialogRef<UsuarioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  )
  {
    if(data.usuario != null)
      this.usuario = Object.assign({}, data.usuario);
  }

  ngOnInit()
  {
    if(this.usuario.id)
      this.title = "Alterar usuário";
    else
      this.title = "Inserir usuário";
  }

  onCloseClick(): void
  {
    this.dialogRef.close(this.usuario);
  }

}
