import styled from 'styled-components'

import refresh from '../assets/icon/refresh@3x.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #215184;
  border-radius: 150px 0px 0px 150px;
  -webkit-border-radius: 150px 0px 0px 150px;
  -moz-border-radius: 150px 0px 0px 150px;
  height: 2.7rem;
  width: 8.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Name = styled.div`
  font-size: 0.8em;
  font-weight: 700;
  color: white;
  padding: 10px;
`

const Icon = styled.img`
  width: 13px;
  height: 13px;
`

export const ReloadButton = ({ children, onClick }) => (
  <Container onClick={onClick}>
    <Name>{children}</Name>
    <Icon src={refresh} alt='refresh-icon' />
  </Container>
)
