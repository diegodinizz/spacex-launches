import styled from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 70px;
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
  width: 80%;
  justify-content: flex-start;
`

const FlightNumber = styled.span`
  font-size: 2.3em;
  margin-right: 50px;
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

export const LaunchItem = ({ item }) => {
  const { flight_number, mission_name, launch_date_utc, rocket } = item

  function convertDate (date_utc) {
    const date = moment.utc(date_utc).format('Do MMM YYYY')
    return date
  }

  return (
    <Container>
      <FlightContainer>
        <FlightNumber>#{flight_number}</FlightNumber>
        <MissionName>{mission_name}</MissionName>
      </FlightContainer>
      <LaunchDateContainer>
        <LaunchDate>{convertDate(launch_date_utc)}</LaunchDate>
        <RocketName>{rocket.rocket_name}</RocketName>
      </LaunchDateContainer>
    </Container>
  )
}
