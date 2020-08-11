import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { catchError, flatMap } from 'rxjs/operators';
import { alwaysDisableLoaderOverlay, enableLoaderOverlay, ToastrService } from '../../../../core';
import { LoadImageAction } from '../state';

@Injectable()
export class LoadImageResolver implements Resolve<null> {
  constructor(
    private readonly store: Store,
    private readonly toastr: ToastrService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<null> {
    return of(null).pipe(
      enableLoaderOverlay(this.store),
      flatMap(() => {
        const imageId = Number(route.paramMap.get('image-id'));
        const loadImage = LoadImageAction.create({ id: imageId });
        return this.store.dispatch(loadImage);
      }),
      alwaysDisableLoaderOverlay(this.store),
      catchError(this.onLoadFailed.bind(this))
    );
  }

  private onLoadFailed(error): void {
    this.toastr.openPermanent(error.message);
  }
}
