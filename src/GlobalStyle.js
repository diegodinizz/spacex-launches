import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
  background-color: rgb(249, 249, 249);
  color: #545454;
  font-family: 'Josefin Sans', sans-serif;

  @media (max-width: 1500px) {
    background-color: white;
    padding: 0;
    margin: 0;
  }
}
`
