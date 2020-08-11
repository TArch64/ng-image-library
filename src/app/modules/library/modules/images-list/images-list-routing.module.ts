import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListPageComponent } from './components';
import { LoadListResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: ImagesListPageComponent,
    resolve: {
      images: LoadListResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ImagesListRoutingModule { }
