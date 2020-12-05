import styled from 'styled-components'

import { ReloadButton } from '../components/buttons/ReloadButton'

import logo from '../assets/spacex-logo.png'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 0 30px 30px;
  align-items: center;
  justify-content: space-between;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: baseline;
`
const Logo = styled.img`
  width: 200px;
  height: 25px;
  margin-right: -20px;
`

const Title = styled.span`
  text-transform: uppercase;
  font-size: 1.2em;
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
