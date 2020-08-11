import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrService } from './services';
import { SnackbarModuleOptionsFactory } from './factories';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    MatSnackBar,
    ToastrService,
    SnackbarModuleOptionsFactory.inject()
  ],
  exports: [
    MatSnackBarModule
  ]
})
export class ToastrModule {}
