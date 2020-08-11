import { SortDirection } from './sort-direction.enum';

export interface ISortModelOptions<T> {
  field: T,
  direction?: SortDirection
}
