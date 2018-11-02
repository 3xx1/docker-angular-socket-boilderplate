// Define actions for cluster UI module here

import { Action } from '@ngrx/store';

export const INCREMENT = '[page-one] Increment';
export const DECREMENT = '[page-one] Decrement';

/**
 * INCREMENT
 * @class Increment
 * @implements {Action}
 */
export class Increment implements Action {
  readonly type = INCREMENT;
  constructor() {}
}

/**
 * DECREMENT
 * @class Decrement
 * @implements {Action}
 */
export class Decrement implements Action {
  readonly type = DECREMENT;
  constructor() {}
}


/**
 * Actions type
 * @type {Actions}
 */
export type Actions
  = Increment
  | Decrement;
