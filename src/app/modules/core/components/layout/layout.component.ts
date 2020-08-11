import { Component, Input } from '@angular/core';
import { BreadcrumbModel } from '../../modules/breadcrumbs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  @Input() public pageTitle = 'Image Library';
  @Input() public breadcrumbs: BreadcrumbModel[];
}
