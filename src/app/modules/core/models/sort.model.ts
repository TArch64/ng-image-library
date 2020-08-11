import { ISortModelOptions } from '../types/sort-model-options.interface';
import { SortDirection } from '../types';

export class SortModel<T> {
  public static create<T>(options: ISortModelOptions<T>): SortModel<T> {
    options.direction = options.direction || SortDirection.ASC;
    return new this(options.field, options.direction);
  }

  constructor(
    public field: T,
    public direction: SortDirection
  ) {}
}
