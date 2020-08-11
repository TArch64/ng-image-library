import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoaderOverlayState } from '../../state';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loader-overlay',
  templateUrl: './loader-overlay.component.html',
  styleUrls: [ './loader-overlay.component.css' ]
})
export class LoaderOverlayComponent {
  public isEnabledLoader$: Observable<boolean> = this.store
    .select(LoaderOverlayState.isEnabledLoader)
    .pipe(debounceTime(150));

  constructor(private readonly store: Store) {}
}
