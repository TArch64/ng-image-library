import { IImageModelOptions } from '../types';

export class ImageModel {
  public static fromApiData(data: IImageModelOptions) {
    return new ImageModel(data.id, data.src, data.filename);
  }

  constructor(
    public id: number,
    public src: string,
    public filename: string
  ) {}
}
