import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import formatDate from "../../utils/formatDate";

//styles
const StyledCard = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 5px 20px 5px 32px;
  margin: 8px 0;
  border-radius: 10px;
  box-shadow: 0 2px 5px ${(props) => props.theme.shadowColor};
  font-weight: 500;
  @media (max-width: ${(props) => props.theme.md}) {
    font-size: 0.75em;
    padding: 5px 15px;
    height: 60px;
  }
  @media (max-width: ${(props) => props.theme.sm}) {
    font-size: 0.6em;
  }
`;
const FlightNum = styled.p`
  margin-right: 10px;
  flex-basis: 100px;
  font-size: 2.5em;
  @media (max-width: ${(props) => props.theme.md}) {
    flex-basis: 60px;
  }
`;
const LaunchName = styled.p`
  margin-right: 10px;
  font-size: 2em;
  flex: 1 1 auto;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 50px;
`;
const Details = styled.div`
  text-align: right;
`;
const LaunchDate = styled.p`
  font-weight: 400;
  white-space: nowrap;
  font-size: 1rem;
`;
const RocketName = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 1.5em;
`;

const Card = ({ launch }) => {
  return (
    <StyledCard>
      <FlightNum># {launch.flight_number} </FlightNum>
      <LaunchName>{launch.name}</LaunchName>
      <Details>
        <LaunchDate>{formatDate(new Date(launch.date_local))}</LaunchDate>
        <RocketName> {launch.rocketDetails.name}</RocketName>
      </Details>
    </StyledCard>
  );
};

Card.propTypes = {
  launch: PropTypes.object.isRequired,
};

export default Card;
