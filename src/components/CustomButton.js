import styled from 'styled-components'

const Container = styled.div`
  width: auto;
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

export const CustomButton = ({ children }) => <Container>{children}</Container>
