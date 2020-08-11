import { Store } from '@ngxs/store';
import { flatMap, map } from 'rxjs/operators';
import { DisableLoaderOverlayAction, EnableLoaderOverlayAction } from '../state';

export function toggleLoaderOverlay<T = any>(store: Store, enableLoader: boolean) {
  const toggleLoader = enableLoader ? EnableLoaderOverlayAction.create() : DisableLoaderOverlayAction.create();
  return flatMap((data: T) => {
    return store.dispatch(toggleLoader).pipe(map(() => data));
  });
}
