import * as PageOneActions from '../actions/page-one.actions';

export interface State {
  value: number
}

const initialState: State = {
  value: 0
};

export function reducer(state: State = initialState, action: PageOneActions.Actions): State {
  switch (action.type) {
    case PageOneActions.INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };

    case PageOneActions.DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };

    default:
      return state;
  }
}
