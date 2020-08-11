export class DeleteCurrentImageAction {
  public static readonly type: string = '[Library] Delete Current Image';

  public static create(): DeleteCurrentImageAction {
    return new this();
  }
}
