import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { sortLaunches } from '../../redux/launches/launches.actions'
import { toggleSortButton } from '../../redux/sort/sort.actions'

import sort from '../../assets/icon/sort@3x.png'

const Container = styled.div`
  height: 1.5rem;
  background-color: #215184;
  color: white;
  padding: 10px 12px;
  margin-right: 10px;
  font-size: 0.8em;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (max-width: 1500px) {
    width: 35%;
    margin: 0;
  }
`

const Icon = styled.img`
  width: 15px;
  height: 15px;
  padding: 10px;
`

export const SortButton = ({ children }) => {
  const { launchesData, sortButton } = useSelector(state => ({
    launchesData: state.launches.launchesData,
    sortButton: state.sort.name
  }))

  const dispatch = useDispatch()

  function handleSort (data) {
    if (data.length <= 1) {
      return
    } else if (sortButton === 'Descending') {
      dispatch(toggleSortButton('Ascending'))
    } else if (sortButton === 'Ascending') {
      dispatch(toggleSortButton('Descending'))
    }
    dispatch(sortLaunches())
  }

  return (
    <Container onClick={() => handleSort(launchesData)}>
      {children}
      <Icon src={sort} alt='sort-icon' />
    </Container>
  )
}
