import { ImageModel } from '../../../../models';
import { IAddImagesActionOptions } from '../../types';

export class AddImagesAction {
  public static readonly type = '[Library] Add Images to State';

  public static create(options: IAddImagesActionOptions): AddImagesAction {
    return new this(options.images);
  }

  constructor(
    public readonly images: ImageModel[]
  ) {}
}
