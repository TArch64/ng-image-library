import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryBreadcrumbsFactory } from './factories';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  providers: [
    LibraryBreadcrumbsFactory
  ]
})
export class LibraryModule { }
