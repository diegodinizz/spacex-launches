import { combineReducers } from 'redux'

import { filterReducer } from './filter/filter.reducer'
import { lauchesReducer } from './launches/lauches.reducer'

export default combineReducers({
  launches: lauchesReducer,
  filter: filterReducer
})
