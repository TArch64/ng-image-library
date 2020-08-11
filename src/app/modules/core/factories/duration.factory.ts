import { Injectable } from '@angular/core';
import { DurationModel } from '../models';

@Injectable()
export class DurationFactory {
  public seconds(seconds: number): DurationModel {
    return DurationModel.create().addSeconds(seconds);
  }
}
