import { FilterActionTypes } from './filter.types'

const INITIAL_STATE = {
  hidden: true
}

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_FILTER_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}
