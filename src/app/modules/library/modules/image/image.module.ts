import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxsModule } from '@ngxs/store';
import { ImagePageComponent, ImageViewComponent, DeleteImageComponent } from './components';
import { ImageRoutingModule } from './image-routing.module';
import { CoreModule, ToastrService } from '../../../core';
import { LoadImageResolver } from './resolvers';
import { ImageState } from './state';
import { ImageApiService } from './services';

@NgModule({
  declarations: [
    ImagePageComponent,
    ImageViewComponent,
    DeleteImageComponent
  ],
  providers: [
    LoadImageResolver,
    ToastrService,
    MatSnackBar,
    ImageApiService
  ],
  imports: [
    CommonModule,
    CoreModule,
    ImageRoutingModule,
    NgxsModule.forFeature([
      ImageState
    ])
  ]
})
export class ImageModule { }
