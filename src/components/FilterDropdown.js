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
      {launches
        .reduce((acc, current) => {
          const filtered = acc.find(
            item => item.launch_year === current.launch_year
          )
          if (!filtered) {
            return acc.concat([current])
          } else {
            return acc
          }
        }, [])
        .map(({ launch_year }) => (
          <FilterItem
            key={launch_year}
            year={launch_year}
            onClick={() => onClick(launch_year)}
          />
        ))}
    </Container>
  )
}
