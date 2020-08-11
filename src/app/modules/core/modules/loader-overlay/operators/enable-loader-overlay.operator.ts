import { Store } from '@ngxs/store';
import { toggleLoaderOverlay } from './toggle-loader-overlay.operator';

export function enableLoaderOverlay(store: Store) {
  return toggleLoaderOverlay(store, true);
}
