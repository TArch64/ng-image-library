import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImagePageComponent } from './components';
import { LoadImageResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: ImagePageComponent,
    resolve: {
      image: LoadImageResolver
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
export class ImageRoutingModule { }
