import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ImagesListState } from '../../state';
import { ImageModel } from '../../../../models';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent {
  @Select(ImagesListState.images)
  public images$: Observable<ImageModel[]>
}
