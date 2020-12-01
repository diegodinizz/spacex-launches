import styled from 'styled-components'

import { Item } from './Item'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  width: 50%;
  height: 700px;
  overflow: scroll;
`

export const List = ({ launches }) => {
  return (
    <Container>
      {launches.map(item => (
        <Item key={item.flight_number} item={item} />
      ))}
    </Container>
  )
}
