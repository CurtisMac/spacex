import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//components
import CardsList from "./CardsList";
import FilterSelector from "./FilterSelector";
import SortButton from "./SortButton";

//styles
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 13px;
  @media (max-width: ${(props) => props.theme.xs}) {
    justify-content: center;
  }
`;

const Launches = ({ state, dispatch, className }) => {
  return (
    <div className={className}>
      <Buttons>
        <FilterSelector
          dispatch={dispatch}
          filterByYear={state.filterByYear}
          launchYears={state.launchYears}
        />
        <SortButton dispatch={dispatch} order={state.order} />
      </Buttons>
      <CardsList state={state} />
    </div>
  );
};

Launches.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Launches;
