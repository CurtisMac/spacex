import React from "react";
import PropTypes from "prop-types";

//components
import Card from "./Card";

const CardsList = ({ state }) => {
  //filter & order launches based on state properties
  let launchList;
  if (!state.filterByYear) {
    launchList = [...state.launches];
  } else {
    launchList = state.launches.filter(
      (launch) => launch.launchYear === state.filterByYear
    );
  }
  if (state.order === "desc") {
    launchList.reverse();
  }

  return (
    <React.Fragment>
      {launchList.map((launch) => {
        return <Card key={launch.id} launch={launch} />;
      })}
    </React.Fragment>
  );
};

CardsList.propTypes = {
  state: PropTypes.shape({
    launches: PropTypes.array.isRequired,
    launchYears: PropTypes.array.isRequired,
    order: PropTypes.oneOf(["desc", "asc"]).isRequired,
    filterByYear: PropTypes.number,
  }),
};

export default CardsList;
