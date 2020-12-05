import { FilterActionTypes } from './filter.types'

const INITIAL_STATE = {
  toggle: false
}

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_FILTER_DROPDOWN:
      return {
        ...state,
        toggle: !state.toggle
      }
    default:
      return state
  }
}
