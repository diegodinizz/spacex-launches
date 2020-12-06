import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { LaunchList } from '../components/launch/LaunchList'
import { Spinner } from '../components/Spinner'

import rocket from '../assets/img/launch-home.png'

const LaunchContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    margin: 10px;
  }
`

const Rocket = styled.img`
  margin: 0 40px 40px 40px;

  @media (max-width: 1500px) {
    display: none;
  }
`

export const Launches = () => {
  const isFetching = useSelector(state => state.launches.isFetching)

  return (
    <LaunchContainer>
      <Rocket src={rocket} alt='rocket' />
      {isFetching ? Spinner() : <LaunchList />}
    </LaunchContainer>
  )
}
