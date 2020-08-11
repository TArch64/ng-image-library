import { Component, Input } from '@angular/core';
import { BreadcrumbModel } from '../models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: BreadcrumbModel[];
}
