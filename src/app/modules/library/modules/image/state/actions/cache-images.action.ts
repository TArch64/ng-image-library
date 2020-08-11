import { ICacheImagesActionOptions } from '../../types';
import { ImageModel } from '../../../../models';

export class CacheImagesAction {
  public static readonly type: string = '[Library] Cache Loaded Images';

  public static create(options: ICacheImagesActionOptions): CacheImagesAction {
    return new this(options.images);
  }

  constructor(public readonly images: ImageModel[]) {}
}
