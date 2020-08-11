import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { LayoutComponent } from './components';
import { BreadcrumbsModule, MaterialModule, LoaderOverlayModule } from './modules';
import { UrlBuilderFactory, DurationFactory } from './factories';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BreadcrumbsModule,
    HttpClientModule,
    LoaderOverlayModule
  ],
  declarations: [
    LayoutComponent
  ],
  providers: [
    UrlBuilderFactory.inject({
      basePath: environment.apiUrl,
      injectionToken: UrlBuilderFactory.API_TOKEN
    }),
    DurationFactory
  ],
  exports: [
    LayoutComponent,
    BreadcrumbsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    LoaderOverlayModule
  ]
})
export class CoreModule { }
