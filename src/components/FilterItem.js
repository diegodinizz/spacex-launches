import styled from 'styled-components'

const Container = styled.li`
  font-size: 1.3em;
  color: #545454;
  font-weight: 400;
  text-align: end;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;

  :hover {
    background-color: #215184;
    color: white;
  }
`

export const FilterItem = ({ year, onClick }) => (
  <Container onClick={onClick}>{year}</Container>
)
