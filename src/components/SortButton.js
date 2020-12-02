import styled from 'styled-components'

import sort from '../assets/icon/sort@3x.png'

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
`

const Icon = styled.img`
  width: 15px;
  height: 15px;
  padding: 10px;
`

export const SortButton = ({ children }) => (
  <Container>
    {children}
    <Icon src={sort} alt='sort-icon' />
  </Container>
)
