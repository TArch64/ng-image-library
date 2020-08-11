import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { alwaysDisableLoaderOverlay, BreadcrumbModel, enableLoaderOverlay, ToastrService } from '../../../../../core';
import { LibraryBreadcrumbsFactory } from '../../../../factories';
import { LoadImagesAction } from '../../state';

@Component({
  selector: 'app-images-list-page',
  templateUrl: './images-list-page.component.html'
})
export class ImagesListPageComponent implements OnInit {
  public breadcrumbs: BreadcrumbModel[] = [
    this.libraryBreadcrumbsFactory.forImagesList()
  ];

  constructor(
    private readonly libraryBreadcrumbsFactory: LibraryBreadcrumbsFactory,
    private readonly store: Store,
    private readonly toastr: ToastrService
  ) {}

  public ngOnInit() {
    of(null).pipe(
      enableLoaderOverlay(this.store),
      flatMap(() => {
        const loadImages = LoadImagesAction.create();
        return this.store.dispatch(loadImages);
      }),
      alwaysDisableLoaderOverlay(this.store)
    ).subscribe({
      error: this.onLoadImagesFailed.bind(this),
    });
  }

  private onLoadImagesFailed(error) {
    this.toastr.openPermanent(error.message);
  }
}
