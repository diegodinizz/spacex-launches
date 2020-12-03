import styled from 'styled-components'

import { FilterItem } from './FilterItem'

const Container = styled.ul`
  list-style: none;
  background-color: white;
  border: 1px solid #eaeaea;
  width: 8.5rem;
  height: 12rem;
  overflow: scroll;
  position: absolute;
  padding: 0;
  left: 0;
  top: 70%;
  box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
  -webkit-box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
  -moz-box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
`

export const FilterDropdown = ({ launches, onClick }) => {
  return (
    <Container>
      {launches.map((item, index) => (
        <FilterItem key={index} year={item} onClick={() => onClick(item)} />
      ))}
    </Container>
  )
}
