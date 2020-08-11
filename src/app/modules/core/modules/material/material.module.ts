import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSpacerComponent } from './components';

const injectingModules: Type<any>[] = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule
];

@NgModule({
  imports: injectingModules.concat([
    CommonModule
  ]),
  declarations: [
    MatSpacerComponent
  ],
  exports: injectingModules.concat([
    MatSpacerComponent
  ])
})
export class MaterialModule {}
