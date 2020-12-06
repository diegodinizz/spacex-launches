import styled from 'styled-components'

import { ReloadButton } from '../components/buttons/ReloadButton'

import logo from '../assets/spacex-logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0 30px 30px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1500px) {
    width: 100%;
    margin: 20px 0;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
`
const Logo = styled.img`
  width: 200px;
  height: 25px;
  margin-right: -20px;

  @media (max-width: 1500px) {
    width: 9rem;
    height: 1.2rem;
    margin-left: 20px;
  }
`

const Title = styled.span`
  text-transform: uppercase;
  font-size: 1.2em;

  @media (max-width: 1500px) {
    font-size: 0.7em;
  }
`

export const Header = () => (
  <Container>
    <LogoContainer>
      <Logo src={logo} alt='logo' />
      <Title>Launches</Title>
    </LogoContainer>
    <ReloadButton>Reload Data</ReloadButton>
  </Container>
)
