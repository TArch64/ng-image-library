import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DisableLoaderOverlayAction, EnableLoaderOverlayAction } from './actions';
import { Injectable } from '@angular/core';
import { ILoaderOverlayStateData } from '../types';

@State<ILoaderOverlayStateData>({
  name: 'loader_overlay',
  defaults: {
    enabledCounter: 0
  }
})
@Injectable()
export class LoaderOverlayState {
  @Selector()
  public static isEnabledLoader(state: ILoaderOverlayStateData): boolean {
    return state.enabledCounter > 0;
  }

  @Action(EnableLoaderOverlayAction)
  private enableLoader(context: StateContext<ILoaderOverlayStateData>) {
    context.patchState({
      enabledCounter: context.getState().enabledCounter + 1
    });
  }

  @Action(DisableLoaderOverlayAction)
  private disableLoader(context: StateContext<ILoaderOverlayStateData>) {
    const state = context.getState();
    if (!LoaderOverlayState.isEnabledLoader(state)) return;

    context.patchState({
      enabledCounter: state.enabledCounter - 1
    });
  }
}
