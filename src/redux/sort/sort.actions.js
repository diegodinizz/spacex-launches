import { SortActionTypes } from './sort.types'

export const toggleSortButton = name => ({
  type: SortActionTypes.TOGGLE_SORT_BUTTON,
  payload: name
})
