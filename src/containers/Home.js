import { useEffect, useState } from 'react'
import styled from 'styled-components'

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
  const [launchesData, setLaunchesData] = useState([])
  const [lauchYears, setLaunchYears] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [sortButton, setSortButton] = useState('Descending')

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v3/launches'

    function mapLaunchYears (data) {
      const mapped = []

      for (let index = 0; index < data.length; index++) {
        mapped.push(data[index].launch_year)
      }

      return mapped.filter((item, index) => {
        return mapped.indexOf(item) === index
      })
    }

    async function getData () {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setLaunchesData(data)
        setLaunchYears(mapLaunchYears(data))
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }

    getData()
  }, [isLoading])

  function handleFilter (event) {
    setLaunchesData(launchesData.filter(item => item.launch_year === event))
  }

  function handleSort () {
    if (sortButton === 'Descending') {
      setLaunchesData(
        launchesData.sort(
          (a, b) => parseFloat(b.flight_number) - parseFloat(a.flight_number)
        )
      )
      setSortButton('Ascending')
    } else {
      setLaunchesData(
        launchesData.sort(
          (a, b) => parseFloat(a.flight_number) - parseFloat(b.flight_number)
        )
      )
      setSortButton('Descending')
    }
  }

  // console.log(launchesData)

  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo src={logo} alt='logo' />
          <Title>Launches</Title>
        </LogoContainer>
        <ReloadButton onClick={() => setIsLoading(true)}>
          Reload Data
        </ReloadButton>
      </Header>
      <FilterSortContainer>
        <FilterButton onClick={() => setToggleDropdown(!toggleDropdown)}>
          Filter by Year
          {toggleDropdown ? (
            <FilterDropdown
              onClick={event => handleFilter(event)}
              launches={lauchYears}
            />
          ) : null}
        </FilterButton>
        <SortButton onClick={() => handleSort()}>Sort {sortButton}</SortButton>
      </FilterSortContainer>
      <LaunchContainer>
        <Rocket src={rocket} alt='rocket' />
        {isLoading ? Spinner() : <LaunchList launches={launchesData} />}
      </LaunchContainer>
    </Container>
  )
}
