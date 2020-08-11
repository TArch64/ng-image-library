import { IBreadcrumbModelOptions } from '../types';

export class BreadcrumbModel {
  public static create(options: IBreadcrumbModelOptions): BreadcrumbModel {
    return new this(options.title, options.path);
  }

  constructor(
    public title: string,
    public path: string | string[]
  ) {}
}
