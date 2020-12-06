import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { toggleFilterDropdown } from '../../redux/filter/filter.actions'

import select from '../../assets/icon/select@3x.png'

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
  outline: none;
  position: relative;

  @media (max-width: 1500px) {
    width: 35%;
    margin: 0;
  }
`

const Icon = styled.img`
  width: 9px;
  height: 7px;
  padding: 0 10px;
`

export const FilterButton = ({ children }) => {
  const dispatch = useDispatch()

  return (
    <Container onClick={() => dispatch(toggleFilterDropdown())}>
      {children}
      <Icon src={select} alt='select-icon' />
    </Container>
  )
}
