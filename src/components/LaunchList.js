import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { LaunchItem } from './LaunchItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px 40px 40px;
  width: 50%;
  height: 700px;
  overflow: scroll;
`

export const LaunchList = () => {
  const { launchesData } = useSelector(state => ({
    launchesData: state.launches.launchesData
  }))

  return (
    <Container>
      {launchesData.map((item, index) => (
        <LaunchItem key={index} item={item} />
      ))}
    </Container>
  )
}
