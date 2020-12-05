import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { SortButton } from '../components/buttons/SortButton'
import { FilterButton } from '../components/buttons/FilterButton'
import { FilterDropdown } from '../components/filter/FilterDropdown'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 60px;
`

export const FilterAndSort = () => {
  const { toggleFilterDropdown, sortButton } = useSelector(state => ({
    toggleFilterDropdown: state.filter.hidden,
    sortButton: state.sort.name
  }))

  return (
    <Container>
      <FilterButton>
        Filter by Year
        {!toggleFilterDropdown ? <FilterDropdown /> : null}
      </FilterButton>
      <SortButton>Sort {sortButton}</SortButton>
    </Container>
  )
}
