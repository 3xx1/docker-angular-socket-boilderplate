import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State as RootState } from '../../app.reducer';
import * as fromPageOne from './reducers/page-one.reducer';

export interface PageOneState {
  pageOne: fromPageOne.State;
}

export interface State extends RootState {
  'pageOne': PageOneState;
}

export const reducers = {
  pageOne: fromPageOne.reducer
};
