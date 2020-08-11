import { IRemoveCachedImagesActionOption } from '../../types';
import { ImageModel } from '../../../../models';

export class RemoveCachedImagesAction {
  public static readonly type: string = '[Library] Remove Images From Cache';

  public static create(options: IRemoveCachedImagesActionOption): RemoveCachedImagesAction {
    return new this(options.images);
  }

  constructor(public images: ImageModel[]) {}
}
