import { Provider } from '@angular/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DurationFactory } from '../../../factories';

export class SnackbarModuleOptionsFactory extends MatSnackBarConfig {
  public static inject(): Provider {
    return {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useClass: this,
      deps: [
        DurationFactory
      ]
    }
  }

  constructor(durationFactory: DurationFactory) {
    super();
    this.duration = durationFactory.seconds(3).build();
  }
}
