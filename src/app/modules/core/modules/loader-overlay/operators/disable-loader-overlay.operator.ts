import { Store } from '@ngxs/store';
import { toggleLoaderOverlay } from './toggle-loader-overlay.operator';

export function disableLoaderOverlay(store: Store) {
  return toggleLoaderOverlay(store, false);
}
