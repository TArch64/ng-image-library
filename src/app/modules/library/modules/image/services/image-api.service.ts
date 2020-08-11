import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UrlBuilderFactory } from '../../../../core/factories';
import { ImageModel } from '../../../models';

@Injectable()
export class ImageApiService {
  private readonly routes = {
    loadImage: id => this.apiUrlBuilder.buildUrlWithBasePath('images', id),
    deleteImage: id => this.apiUrlBuilder.buildUrlWithBasePath('images', id)
  };

  constructor(
    @Inject(UrlBuilderFactory.API_TOKEN)
    private readonly apiUrlBuilder: UrlBuilderFactory,
    private readonly httpClient: HttpClient
  ) {}

  public loadImage(id: number): Observable<ImageModel> {
    return this.httpClient.get(this.routes.loadImage(id)).pipe(
      map(ImageModel.fromApiData)
    );
  }

  public deleteImage(image: ImageModel): Observable<void> {
    return this.httpClient.delete<null>(this.routes.deleteImage(image.id))
  }
}
