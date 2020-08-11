export class LoadImagesAction {
  public static readonly type: string = '[Library] load uploaded images'

  public static create(): LoadImagesAction {
    return new this();
  }
}
