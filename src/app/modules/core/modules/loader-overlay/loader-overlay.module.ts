import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { LoaderOverlayComponent } from './components';
import { LoaderOverlayState } from './state';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    MatProgressSpinnerModule,
    NgxsModule.forFeature([
      LoaderOverlayState
    ])
  ],
  exports: [
    LoaderOverlayComponent
  ],
  declarations: [
    LoaderOverlayComponent
  ]
})
export class LoaderOverlayModule {}
