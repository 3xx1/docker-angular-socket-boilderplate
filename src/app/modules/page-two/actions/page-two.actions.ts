// Define actions for cluster UI module here

import { Action } from '@ngrx/store';

export const UPDATE_VALUE = '[page-two] Update Value';

/**
 * INCREMENT
 * @class Increment
 * @implements {Action}
 */
export class UpdateValue implements Action {
  readonly type = UPDATE_VALUE;
  constructor(public payload: any) {}
}

/**
 * Actions type
 * @type {Actions}
 */
export type Actions
  = UpdateValue;
