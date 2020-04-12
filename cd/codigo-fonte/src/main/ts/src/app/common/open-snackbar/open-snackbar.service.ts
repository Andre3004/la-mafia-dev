import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable()
export class OpenSnackBarService{

    constructor(private snackbar: MatSnackBar)
    {
    }

    public openSuccess(message: string, time = 5000): void
    {
        this.snackbar.open(message, 'Fechar',  {
            duration: time,
            panelClass: ["bgc-green-700", "tc-grey-50", "my-snack-bar"]
        })
    }

    public openError(message: string, time = 5000): void
    {
        this.snackbar.open(message, 'Fechar',  {
            duration: time,
            panelClass: ["bgc-red-700", "tc-grey-50", "my-snack-bar"]
        })
    }

}

