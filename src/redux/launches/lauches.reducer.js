import { LaunchesActionTypes } from './launches.types'

import { mapYears } from './launches.utils'

const INITIAL_STATE = {
  launchesData: null,
  isFetching: true,
  errorMessage: undefined,
  yearsList: null
}

export const lauchesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LaunchesActionTypes.FETCH_LAUNCHES_START:
      return {
        ...state,
        isFetching: true
      }
    case LaunchesActionTypes.FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        launchesData: action.payload,
        yearsList: mapYears(action.payload)
      }
    case LaunchesActionTypes.FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}
