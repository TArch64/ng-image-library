import { Store } from '@ngxs/store';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMapTo } from 'rxjs/operators';
import { disableLoaderOverlay } from './disable-loader-overlay.operator';

export function disableLoaderOverlayOnError<T = any>(store: Store) {
  return function (source: Observable<T>): Observable<T> {
    return source.pipe(catchError((error) => {
      return of(null).pipe(
        disableLoaderOverlay(store),
        switchMapTo(throwError(error))
      );
    }));
  }
}
