import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';
import { IImageStateData } from '../types';
import { CacheImagesAction, DeleteCurrentImageAction, LoadImageAction, RemoveCachedImagesAction } from './actions';
import { ImageModel } from '../../../models';
import { ImageApiService } from '../services';
import { RemoveImagesAction } from '../../images-list/state/actions';

@State<IImageStateData>({
  name: 'library_image',
  defaults: {
    currentImage: null,
    cachedImages: []
  }
})
@Injectable()
export class ImageState {
  @Selector()
  public static currentImage(state: IImageStateData): ImageModel {
    return state.currentImage;
  }

  constructor(
    private readonly imageApiService: ImageApiService
  ) {}

  @Action(LoadImageAction)
  private loadImage(context: StateContext<IImageStateData>, action: LoadImageAction): Observable<void> {
    const cachedImage = this.fetchImageFromCache(action.imageId, context.getState());
    if (cachedImage) {
      context.patchState({ currentImage: cachedImage });
      return of(null);
    }
    return this.imageApiService.loadImage(action.imageId).pipe(
      tap((image: ImageModel) => {
        context.patchState({ currentImage: image })
      }),
      flatMap((image: ImageModel) => {
        const cacheImages = CacheImagesAction.create({ images: [image] });
        return context.dispatch(cacheImages);
      })
    )
  }

  private fetchImageFromCache(imageId: number, state: IImageStateData): ImageModel | undefined {
    return state.cachedImages.find(image => image.id === imageId);
  }

  @Action(CacheImagesAction)
  private cacheImages(context: StateContext<IImageStateData>, action: CacheImagesAction): void {
    const cachedImages = context.getState().cachedImages;
    const cachedImagesIds = cachedImages.map(image => image.id);
    const newCachedImages = action.images.filter(image => !cachedImagesIds.includes(image.id));
    context.patchState({ cachedImages: cachedImages.concat(newCachedImages) });
  }

  @Action(DeleteCurrentImageAction)
  private deleteCurrentImage(context: StateContext<IImageStateData>): Observable<void> {
    const image = context.getState().currentImage;
    return this.imageApiService.deleteImage(image).pipe(
      flatMap(() => {
        const removeCachedImages = RemoveCachedImagesAction.create({ images: [image] });
        const removeImages = RemoveImagesAction.create({ images: [image] });
        return context.dispatch([ removeCachedImages, removeImages ]);
      })
    );
  }

  @Action(RemoveCachedImagesAction)
  private removeCachedImages(context: StateContext<IImageStateData>, action: RemoveCachedImagesAction): void {
    const removingImageIds = action.images.map(image => image.id);
    const updatedList = context.getState().cachedImages.filter(image => !removingImageIds.includes(image.id));
    context.patchState({ cachedImages: updatedList });
  }
}
