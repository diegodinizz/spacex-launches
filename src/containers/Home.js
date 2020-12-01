import { useEffect, useState } from 'react'
import styled from 'styled-components'

import logo from '../assets/spacex-logo.png'
import rocket from '../assets/img/launch-home.png'

import { ReloadButton } from '../components/ReloadButton'
import { List } from '../components/List'
import { Spinner } from '../components/Spinner'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 20px auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(153, 153, 153, 0.5);
`

const Head = styled.div`
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

const LaunchContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Rocket = styled.img`
  margin: 40px;
`

export const Home = () => {
  const [launchesData, setLaunchesData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const url = 'https://api.spacexdata.com/v3/launches'

    async function getData () {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setLaunchesData(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }

    getData()
  }, [isLoading])

  function renderLaunchesList (data) {
    return <List launches={data} />
  }

  return (
    <Container>
      <Head>
        <LogoContainer>
          <Logo src={logo} alt='logo' />
          <Title>Launches</Title>
        </LogoContainer>
        <ReloadButton onClick={() => setIsLoading(true)}>
          Reload Data
        </ReloadButton>
      </Head>
      <LaunchContainer>
        <Rocket src={rocket} alt='rocket' />
        {isLoading ? Spinner() : renderLaunchesList(launchesData)}
      </LaunchContainer>
    </Container>
  )
}
