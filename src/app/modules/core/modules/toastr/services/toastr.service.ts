import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ToastrService {
  constructor(
    private readonly snackBar: MatSnackBar
  ) {}

  public open(message: string): void {
    this.snackBar.open(message);
  }

  public openPermanent(message: string) {
    this.snackBar.open(message, undefined, {
      duration: 0
    });
  }
}
