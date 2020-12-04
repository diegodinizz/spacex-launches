import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { fetchLaunchesStartAsync } from '../redux/launches/launches.actions'

import logo from '../assets/spacex-logo.png'
import rocket from '../assets/img/launch-home.png'

import { ReloadButton } from '../components/ReloadButton'
import { LaunchList } from '../components/LaunchList'
import { Spinner } from '../components/Spinner'
import { SortButton } from '../components/SortButton'
import { FilterButton } from '../components/FilterButton'
import { FilterDropdown } from '../components/FilterDropdown'

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
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0 30px 30px;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
`
const Logo = styled.img`
  width: 200px;
  height: 25px;
  margin-right: -20px;
`

const Title = styled.span`
  text-transform: uppercase;
  font-size: 1.2em;
`

const FilterSortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 60px;
`

const LaunchContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Rocket = styled.img`
  margin: 0 40px 40px 40px;
`

export const Home = () => {
  const [sortButton, setSortButton] = useState('Descending')

  const { launchesData, isFetching, toggleDropdown } = useSelector(state => ({
    launchesData: state.launches.launchesData,
    isFetching: state.launches.isFetching,
    toggleDropdown: state.filter.toggle
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLaunchesStartAsync())
  }, [dispatch])

  function handleFilter (event) {
    launchesData.filter(item => item.launch_year === event)
  }

  function handleSort (data) {
    if (sortButton === 'Descending') {
      data.sort(
        (a, b) => parseFloat(b.flight_number) - parseFloat(a.flight_number)
      )
      setSortButton('Ascending')
    } else {
      data.sort(
        (a, b) => parseFloat(a.flight_number) - parseFloat(b.flight_number)
      )
      setSortButton('Descending')
    }
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo src={logo} alt='logo' />
          <Title>Launches</Title>
        </LogoContainer>
        <ReloadButton>Reload Data</ReloadButton>
      </Header>
      <FilterSortContainer>
        <FilterButton>
          Filter by Year
          {toggleDropdown ? (
            <FilterDropdown onClick={event => handleFilter(event)} />
          ) : null}
        </FilterButton>
        <SortButton onClick={() => handleSort(launchesData)}>
          Sort {sortButton}
        </SortButton>
      </FilterSortContainer>
      <LaunchContainer>
        <Rocket src={rocket} alt='rocket' />
        {isFetching ? Spinner() : <LaunchList />}
      </LaunchContainer>
    </Container>
  )
}
