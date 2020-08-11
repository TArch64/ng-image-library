import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { UploadingImageModel } from '../models';
import { ImageModel } from '../../../models';
import { ImagesApiService } from './images-api.service';

@Injectable()
export class UploaderService {
  constructor(private apiService: ImagesApiService) {}

  public bulkUpload(images: File[]): Observable<ImageModel[]> {
    const uploads = images.map(file => this.upload(file));
    return combineLatest(uploads);
  }

  public upload(image: File): Observable<ImageModel> {
    return of(image).pipe(
      flatMap(file => UploadingImageModel.fromFile(file)),
      flatMap(uploadingImage => this.apiService.upload(uploadingImage))
    );
  }
}
