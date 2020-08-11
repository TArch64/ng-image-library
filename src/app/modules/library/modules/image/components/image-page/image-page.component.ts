import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreadcrumbModel } from '../../../../../core';
import { LibraryBreadcrumbsFactory } from '../../../../factories';
import { ImageModel } from '../../../../models';
import { ImageState } from '../../state';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html'
})
export class ImagePageComponent implements OnInit, OnDestroy {
  @Select(ImageState.currentImage)
  public image: Observable<ImageModel>;

  private destroy$: Subject<null> = new Subject<null>();

  public pageTitle = 'View Image';
  public breadcrumbs: BreadcrumbModel[] = [
    this.libraryBreadcrumbsFactory.forImagesList()
  ];

  constructor(
    private libraryBreadcrumbsFactory: LibraryBreadcrumbsFactory
  ) {}

  public ngOnInit() {
    this.image.pipe(takeUntil(this.destroy$)).subscribe((image: ImageModel) => {
      this.createBreadcrumb(image);
      this.updatePageTitle(image);
    });
  }

  public ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  private createBreadcrumb(image: ImageModel): void {
    const breadcrumb = this.libraryBreadcrumbsFactory.forImage(image);
    this.breadcrumbs.push(breadcrumb)
  }

  private updatePageTitle(image: ImageModel) {
    this.pageTitle = `View ${image.filename}`;
  }
}
