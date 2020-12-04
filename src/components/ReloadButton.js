import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { fetchLaunchesStartAsync } from '../redux/launches/launches.actions'

import refresh from '../assets/icon/refresh@3x.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #215184;
  border-radius: 150px 0px 0px 150px;
  -webkit-border-radius: 150px 0px 0px 150px;
  -moz-border-radius: 150px 0px 0px 150px;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.8em;
  font-weight: 700;
  color: white;
  padding: 10px 15px;
`

const Icon = styled.img`
  width: 13px;
  height: 13px;
  padding: 0 10px;
`

export const ReloadButton = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <Container onClick={() => dispatch(fetchLaunchesStartAsync())}>
      {children}
      <Icon src={refresh} alt='refresh-icon' />
    </Container>
  )
}
