import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State as RootState } from '../../app.reducer';
import * as fromPageTwo from './reducers/page-two.reducer';

export interface PageTwoState {
  pageTwo: fromPageTwo.State;
}

export interface State extends RootState {
  'pageTwo': PageTwoState;
}

export const reducers = {
  pageTwo: fromPageTwo.reducer
};
