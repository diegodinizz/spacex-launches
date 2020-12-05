import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { toggleSortButton } from '../redux/sort/sort.actions'
import { fetchLaunchesByYearAsync } from '../redux/launches/launches.actions'

const Container = styled.li`
  font-size: 1.3em;
  color: #545454;
  font-weight: 400;
  text-align: end;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;

  :hover {
    background-color: #215184;
    color: white;
  }
`

export const FilterItem = ({ year }) => {
  const dispatch = useDispatch()

  return (
    <Container
      onClick={() => {
        dispatch(fetchLaunchesByYearAsync(year))
        dispatch(toggleSortButton('Descending'))
      }}
    >
      {year}
    </Container>
  )
}
