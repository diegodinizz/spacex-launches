import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  margin: 5px;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
  -webkit-box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
  -moz-box-shadow: 0px 3px 5px 2px rgba(220, 220, 220, 1);
`

const FlightContainer = styled.div`
  display: flex;
  align-items: baseline;
  width: 35%;
  justify-content: space-between;
`

const FlightNumber = styled.span`
  font-size: 2.3em;
`

const MissionName = styled.span`
  font-size: 2em;
`

const LaunchDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LaunchDate = styled.span`
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 15px;
`

const RocketName = styled.span`
  font-size: 1.2em;
  font-weight: 700;
`

export const Item = () => (
  <Container>
    <FlightContainer>
      <FlightNumber>#1</FlightNumber>
      <MissionName>FalconSat</MissionName>
    </FlightContainer>
    <LaunchDateContainer>
      <LaunchDate>24th Mar 2006</LaunchDate>
      <RocketName>Falcon 1</RocketName>
    </LaunchDateContainer>
  </Container>
)
