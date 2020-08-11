import { ILoadImageActionOptions } from '../../types';

export class LoadImageAction {
  public static readonly type: string = '[Library] Load Image';

  public static create(options: ILoadImageActionOptions): LoadImageAction {
    return new this(options.id);
  }

  constructor(public readonly imageId: number) {}
}
