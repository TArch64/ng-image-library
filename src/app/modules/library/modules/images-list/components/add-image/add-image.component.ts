import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { of, Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { alwaysDisableLoaderOverlay, enableLoaderOverlay, ToastrService } from '../../../../../core';
import { UploadImagesAction } from '../../state';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html'
})
export class AddImageComponent {
  @ViewChild('imagesSelect')
  private imagesSelect: ElementRef<HTMLInputElement>

  constructor(
    private readonly store: Store,
    private readonly toastr: ToastrService
  ) {}

  public upload(): void {
    of(null).pipe(
      enableLoaderOverlay(this.store),
      flatMap((): Observable<void> => {
        const files = this.fetchAndResetImageFiles();
        const uploadImages = UploadImagesAction.create({ files });
        return this.store.dispatch(uploadImages);
      }),
      alwaysDisableLoaderOverlay(this.store)
    ).subscribe({
      next: this.onUploaded.bind(this),
      error: this.onUploadFailed.bind(this)
    });
  }

  private fetchAndResetImageFiles(): File[] {
    const files = Array.from(this.imagesSelect.nativeElement.files);
    this.imagesSelect.nativeElement.value = '';
    return files;
  }

  private onUploaded(): void {
    this.toastr.open('Uploaded Successfully');
  }

  private onUploadFailed(error): void {
    this.toastr.open(error.message);
  }
}
