import { SortActionTypes } from './sort.types'

const INITIAL_STATE = {
  name: ''
}

export const sortReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SortActionTypes.TOGGLE_SORT_BUTTON:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}
