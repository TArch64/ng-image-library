import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { disableLoaderOverlayOnError } from './disable-loader-overlay-on-error.operator';
import { disableLoaderOverlay } from './disable-loader-overlay.operator';

export function alwaysDisableLoaderOverlay<T = any>(store: Store) {
  return function (source: Observable<T>) {
    return source.pipe(
      disableLoaderOverlay(store),
      disableLoaderOverlayOnError(store)
    );
  }
}
