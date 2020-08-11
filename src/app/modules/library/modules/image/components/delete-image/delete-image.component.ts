import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { alwaysDisableLoaderOverlay, enableLoaderOverlay, ToastrService } from '../../../../../core';
import { DeleteCurrentImageAction } from '../../state';

@Component({
  selector: 'app-delete-image',
  templateUrl: './delete-image.component.html'
})
export class DeleteImageComponent {
  constructor(
    private readonly store: Store,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) {}

  public deleteImage() {
    of(null).pipe(
      enableLoaderOverlay(this.store),
      flatMap(() => {
        const deleteAction = DeleteCurrentImageAction.create();
        return this.store.dispatch(deleteAction);
      }),
      alwaysDisableLoaderOverlay(this.store)
    ).subscribe({
      next: this.onDeleted.bind(this),
      error: this.onDeleteFailed.bind(this)
    });
  }

  private onDeleted(): void {
    this.toastr.open('Successfully Deleted');
    this.router.navigate(['../']);
  }

  private onDeleteFailed(error: Error): void {
    this.toastr.open(error.message);
  }
}
