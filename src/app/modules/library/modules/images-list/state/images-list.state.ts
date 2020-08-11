import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddImagesAction, LoadImagesAction, UploadImagesAction, RemoveImagesAction } from './actions';
import { Observable, of } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';
import { ImageModel } from '../../../models';
import { ImagesApiService, UploaderService } from '../services';
import { IImagesListStateData, ImageSortableFields } from '../types';
import { SortDirection, SortModel } from '../../../../core';
import { CacheImagesAction } from '../../image';

@State<IImagesListStateData>({
  name: 'library_images_list',
  defaults: {
    images: [],
    isLoadedAll: false
  }
})
@Injectable()
export class ImagesListState {
  @Selector()
  public static images(state: IImagesListStateData): ImageModel[] {
    return state.images;
  }

  constructor(
    private readonly uploaderService: UploaderService,
    private readonly imagesApiService: ImagesApiService
  ) {}

  @Action(UploadImagesAction)
  private uploadImage(context: StateContext<null>, action: UploadImagesAction): Observable<void> {
    return this.uploaderService.bulkUpload(action.files).pipe(
      flatMap((images: ImageModel[]): Observable<void> => {
        const addImages = AddImagesAction.create({ images });
        return context.dispatch(addImages);
      })
    );
  }

  @Action(AddImagesAction)
  private addImages(context: StateContext<IImagesListStateData>, action: AddImagesAction): Observable<void> {
    const updatedList = action.images.concat(context.getState().images);
    context.patchState({ images: updatedList });
    const cacheImages = CacheImagesAction.create({ images: action.images });
    return context.dispatch(cacheImages);
  }

  @Action(LoadImagesAction)
  private loadImages(context: StateContext<IImagesListStateData>): Observable<void> {
    if (context.getState().isLoadedAll) return of(null);

    const sort = SortModel.create({ field: ImageSortableFields.ID, direction: SortDirection.DESC });
    return this.imagesApiService.loadList(sort).pipe(
      flatMap((images: ImageModel[]) => {
        const addImages = AddImagesAction.create({ images });
        return context.dispatch(addImages);
      }),
      tap(() => {
        context.patchState({ isLoadedAll: true });
      })
    )
  }

  @Action(RemoveImagesAction)
  private removeImages(context: StateContext<IImagesListStateData>, action: RemoveImagesAction): void {
    const removingImageIds = action.images.map(image => image.id);
    const updatedList = context.getState().images.filter(image => !removingImageIds.includes(image.id));
    context.patchState({ images: updatedList });
  }
}
