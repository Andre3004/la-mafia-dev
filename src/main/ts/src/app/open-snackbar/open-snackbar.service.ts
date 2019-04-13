import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class OpenSnackBarService{
    constructor(private snackbar: MatSnackBar)
    {
    }

    public open(message: string): void
    {
        this.snackbar.open(message, 'Fechar', {
            duration: 5000
        })
    }
}
;
