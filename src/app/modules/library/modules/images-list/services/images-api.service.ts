import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SortModel, UrlBuilderFactory } from '../../../../core';
import { ImageModel } from '../../../models';
import { UploadingImageModel } from '../models';
import { IImageApiJson, ImageSortableFields } from '../types';

@Injectable()
export class ImagesApiService {
  private readonly routes = {
    upload: this.apiUrlBuilder.buildUrlWithBasePath('images'),
    loadList: this.apiUrlBuilder.buildUrlWithBasePath('images')
  };

  constructor(
    @Inject(UrlBuilderFactory.API_TOKEN) private apiUrlBuilder: UrlBuilderFactory,
    private httpClient: HttpClient
  ) {}

  public upload(image: UploadingImageModel): Observable<ImageModel> {
    return this.httpClient.post<IImageApiJson>(this.routes.upload, image.toJSON()).pipe(
      map(ImageModel.fromApiData)
    );
  }

  public loadList(sort: SortModel<ImageSortableFields>): Observable<ImageModel[]> {
    const requestParams = {
      params: {
        _sort: sort.field,
        _order: sort.direction
      }
    };
    return this.httpClient.get<IImageApiJson[]>(this.routes.loadList, requestParams).pipe(
      map((listJson: IImageApiJson[]) => listJson.map(ImageModel.fromApiData))
    );
  }
}
