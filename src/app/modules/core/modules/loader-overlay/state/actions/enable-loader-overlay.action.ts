export class EnableLoaderOverlayAction {
  public static readonly type: string = '[Loader Overlay] Enable';

  public static create(): EnableLoaderOverlayAction {
    return new this();
  }
}
