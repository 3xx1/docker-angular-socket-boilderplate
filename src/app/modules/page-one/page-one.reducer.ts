// import { createSelector, createFeatureSelector } from '@ngrx/store';
// import { State as RootState } from '../../app.reducer';
// import * as fromCluster from './reducers/cluster.reducer';
//
// export interface ClusterState {
//   cluster: fromCluster.State;
// }
//
// export interface State extends RootState {
//   'cluster': ClusterState;
// }
//
// export const reducers = {
//   cluster: fromCluster.reducer
// };
//
// /**
//  * The createFeatureSelector function selects a piece of state from the root of the state object. This is used for
//  * selecting feature states that are loaded eagerly or lazily.
//  */
// export const getClusterState = createFeatureSelector<ClusterState>('cluster');
//
// /**
//  * Every reducer module exports selector functions, however child reducers have no knowledge of the overall state
//  * tree. To make them useable, we need to make new selectors that wrap them.
//  *
//  * The createSelector function creates very efficient selectors that are 'memoized' and only recompute when arguments
//  * change. The created selectors can also be composed together to select different pieces of state.
//  */
//
// export const getClusterEntityState = createSelector(
//   getClusterState,
//   (state: ClusterState) => state.cluster
// );
