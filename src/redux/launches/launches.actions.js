import { LaunchesActionTypes } from './launches.types'

import { handleErrors } from './launches.utils'

export const fetchLaunchesStart = () => ({
  type: LaunchesActionTypes.FETCH_LAUNCHES_START
})

export const fetchLaunchesSuccess = launches => ({
  type: LaunchesActionTypes.FETCH_LAUNCHES_SUCCESS,
  payload: launches
})

export const fetchLaunchesFailure = errorMessage => ({
  type: LaunchesActionTypes.FETCH_LAUNCHES_FAILURE,
  payload: errorMessage
})

export const fetchLaunchesStartAsync = () => {
  return async dispatch => {
    dispatch(fetchLaunchesStart())

    try {
      const response = await fetch('https://api.spacexdata.com/v3/launches')
      const data = await handleErrors(response)
      dispatch(fetchLaunchesSuccess(data))
    } catch (error) {
      return dispatch(fetchLaunchesFailure(error.message))
    }
  }
}
