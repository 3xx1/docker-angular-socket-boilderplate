import * as PageTwoActions from '../actions/page-two.actions';

export interface State {
  value: number
}

const initialState: State = {
  value: 30
};

export function reducer(state: State = initialState, action: PageTwoActions.Actions): State {
  switch (action.type) {
    case PageTwoActions.UPDATE_VALUE:
      return {
        ...state,
        value: action.payload
      };

    default:
      return state;
  }
}
