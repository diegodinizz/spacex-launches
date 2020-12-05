import { combineReducers } from 'redux'

import { filterReducer } from './filter/filter.reducer'
import { lauchesReducer } from './launches/lauches.reducer'
import { sortReducer } from './sort/sort.reducer'

export default combineReducers({
  launches: lauchesReducer,
  filter: filterReducer,
  sort: sortReducer
})
