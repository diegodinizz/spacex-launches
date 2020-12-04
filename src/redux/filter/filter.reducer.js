import { FilterActionTypes } from './filter.types'

const INITIAL_STATE = {
  toggle: false,
  filterData: null,
  filterItems: []
}

export const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.TOGGLE_FILTER_DROPDOWN:
      return {
        ...state,
        toggle: !state.toggle
      }
    case FilterActionTypes.FILTER_ITEM:
      return {
        ...state,
        filterItems: state.filterItems.filter(
          filterItem => filterItem.id !== action.payload.id
        )
      }
    default:
      return state
  }
}
