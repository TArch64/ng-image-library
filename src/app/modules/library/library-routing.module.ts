import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'images'
  },
  {
    path: 'images',
    loadChildren: () => import('./modules/images-list').then(m => m.ImagesListModule)
  },
  {
    path: 'images/:image-id',
    loadChildren: () => import('./modules/image').then(m => m.ImageModule)
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
export class LibraryRoutingModule { }
