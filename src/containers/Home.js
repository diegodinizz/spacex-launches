import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchLaunchesStartAsync } from '../redux/launches/launches.actions'
import { toggleSortButton } from '../redux/sort/sort.actions'

import { Header } from './Header'
import { FilterAndSort } from './FilterAndSort'
import { Launches } from './Launches'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 20px auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);

  @media (max-width: 1500px) {
    box-shadow: none;
    margin: 0;
    width: 100%;
  }
`

export const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLaunchesStartAsync())
    dispatch(toggleSortButton('Descending'))
  }, [dispatch])

  return (
    <Container>
      <Header />
      <FilterAndSort />
      <Launches />
    </Container>
  )
}
