import { IUploadImagesActionOptions } from '../../types';

export class UploadImagesAction {
  public static readonly type: string = '[Library] Upload Image';

  public static create(options: IUploadImagesActionOptions): UploadImagesAction {
    return new this(options.files)
  }

  constructor(
    public readonly files: File[]
  ) {}
}
