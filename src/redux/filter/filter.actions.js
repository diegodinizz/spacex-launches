import { FilterActionTypes } from "./filter.types";

export const toggleFilterDropdown = () => ({
  type: FilterActionTypes.TOGGLE_FILTER_DROPDOWN
})

export const fetchLaunchesByYearStart = () => ({
  type: FilterActionTypes.FETCH_LAUNCHES_BY_YEAR_START
})

export const fetchLaunchesByYearSuccess = launches => ({
  type: FilterActionTypes.FETCH_LAUNCHES_BY_YEAR_SUCCESS,
  payload: launches
})

export const fetchLaunchesByYearFailure = errorMessage => ({
  type: FilterActionTypes.FETCH_LAUNCHES_BY_YEAR_FAILURE,
  payload: errorMessage
})

export const filterItem = item => ({
  type: FilterActionTypes.FILTER_ITEM,
  payload: item
})

export const fetchLaunchesByYearAsync = (year) => {
  return async dispatch => {
    dispatch(fetchLaunchesByYearStart())

    try {
      const response = await fetch(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
      const data = await response.json()
      dispatch(fetchLaunchesByYearSuccess(data))
    } catch (error) {
      return dispatch(fetchLaunchesByYearFailure(error.message))
    }
  }
}