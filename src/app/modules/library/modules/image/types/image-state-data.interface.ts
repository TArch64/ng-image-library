import { ImageModel } from '../../../models';

export interface IImageStateData {
  currentImage: ImageModel,
  cachedImages: ImageModel[]
}
