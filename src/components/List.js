import styled from 'styled-components'

import { Item } from './Item'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  width: 50%;
`

export const List = () => (
  <Container>
    <Item />
  </Container>
)
