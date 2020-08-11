import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './components/breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BreadcrumbsComponent
  ]
})
export class BreadcrumbsModule {}
