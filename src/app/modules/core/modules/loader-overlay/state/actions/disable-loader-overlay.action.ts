export class DisableLoaderOverlayAction {
  public static readonly type: string = '[Loader Overlay] Disable';

  public static create(): DisableLoaderOverlayAction {
    return new this();
  }
}
