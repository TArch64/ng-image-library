import { ImageModel } from '../../../../models';
import { IRemoveImagesActionOptions } from '../../types';

export class RemoveImagesAction {
  public static readonly type: string = '[Library] Remove image from list';

  public static create(options: IRemoveImagesActionOptions): RemoveImagesAction {
    return new this(options.images);
  }

  constructor(public images: ImageModel[]) {}
}
