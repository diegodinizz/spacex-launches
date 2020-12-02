import styled from 'styled-components'

import { LaunchItem } from './LaunchItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 40px 40px 40px;
  width: 50%;
  height: 700px;
  overflow: scroll;
`

export const LaunchList = ({ launches }) => {
  return (
    <Container>
      {launches.map((item, index) => (
        <LaunchItem key={index} item={item} />
      ))}
    </Container>
  )
}
