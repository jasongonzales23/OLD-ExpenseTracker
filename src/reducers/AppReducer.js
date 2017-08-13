import { ActionTypes } from '../actions'

export const initialState = {
  foo: true,
  bar: false,
}

export function AppReducer(state = initialState, action) {
  switch (action.type) {

    case ActionTypes.DO_THING: return {
      ...state,
      foo: false
    }
    default:
      return state;
  }
}
