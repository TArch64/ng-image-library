import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { ToastrService, alwaysDisableLoaderOverlay, enableLoaderOverlay } from '../../../../core';
import { LoadImagesAction } from '../state';

@Injectable()
export class LoadListResolver implements Resolve<null> {
  constructor(
    private readonly store: Store,
    private readonly toastr: ToastrService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<null> {
    return of(null).pipe(
      enableLoaderOverlay(this.store),
      flatMap(() => {
        const loadImages = LoadImagesAction.create();
        return this.store.dispatch(loadImages);
      }),
      alwaysDisableLoaderOverlay(this.store),
      catchError(this.onLoadImagesFailed.bind(this))
    );
  }

  private onLoadImagesFailed(error): void {
    this.toastr.openPermanent(error.message);
  }
}
