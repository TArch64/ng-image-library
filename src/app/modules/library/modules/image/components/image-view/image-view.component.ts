import { Component, Input } from '@angular/core';
import { ImageModel } from '../../../../models';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent {
  @Input()
  public image: ImageModel;
}
