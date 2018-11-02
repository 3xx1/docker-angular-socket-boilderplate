import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './modules/_routing/routing.utilities';
import { environment } from '../environments/environment';

export interface State {
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: routerReducer
};

/**
 * Log Actions
 * @param reducer
 * @returns {(state:State, action:any)=>State}
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('action', action);
    console.log('state', state);
    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
