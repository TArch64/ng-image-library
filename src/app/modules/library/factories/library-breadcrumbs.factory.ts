import { Injectable } from '@angular/core';
import { BreadcrumbModel } from '../../core';
import { ImageModel } from '../models';

@Injectable()
export class LibraryBreadcrumbsFactory {
  private baseUrl: string = '/library';
  private readonly libraryImagesPath: string[] = [this.baseUrl, 'images'];

  public forImagesList(): BreadcrumbModel {
    return BreadcrumbModel.create({
      title: 'Image Library',
      path: this.libraryImagesPath
    });
  }

  public forImage(image: ImageModel): BreadcrumbModel {
    return BreadcrumbModel.create({
      title: image.filename,
      path: this.libraryImagesPath.concat(image.id.toString())
    });
  }
}
