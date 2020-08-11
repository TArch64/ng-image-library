import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesListPageComponent, AddImageComponent, ImagesListComponent } from './components';
import { NgxsModule } from '@ngxs/store';
import { ImagesListRoutingModule } from './images-list-routing.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreModule, ToastrService } from '../../../core';
import { ImagesListState } from './state';
import { ImagesApiService, UploaderService } from './services';
import { LoadListResolver } from './resolvers';

@NgModule({
  declarations: [
    ImagesListPageComponent,
    AddImageComponent,
    ImagesListComponent
  ],
  providers: [
    UploaderService,
    ImagesApiService,
    MatSnackBar,
    ToastrService,
    LoadListResolver
  ],
  imports: [
    CommonModule,
    CoreModule,
    ImagesListRoutingModule,
    NgxsModule.forFeature([
      ImagesListState
    ])
  ]
})
export class ImagesListModule { }
