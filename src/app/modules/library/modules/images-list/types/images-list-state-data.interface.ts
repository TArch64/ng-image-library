import { ImageModel } from '../../../models';

export interface IImagesListStateData {
  images: ImageModel[];
  isLoadedAll: boolean;
}
