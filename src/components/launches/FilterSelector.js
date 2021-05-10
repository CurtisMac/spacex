import React from "react";
import PropTypes from "prop-types";
import Select from "../StyledReactSelect";

const FilterSelector = ({ dispatch, launchYears, filterByYear }) => {
  const handleChange = (selection) => {
    const payload = selection ? selection.value : null;
    dispatch({ type: "filter", payload });
  };

  return (
    <>
      <Select
        options={launchYears.map((year) => ({ value: year, label: year }))}
        isClearable={true}
        isSearchable={false}
        onChange={handleChange}
        placeholder="Filter by Year"
        defaultValue={filterByYear}
      />
    </>
  );
};

FilterSelector.propTypes = {
  dispatch: PropTypes.func.isRequired,
  launchYears: PropTypes.array.isRequired,
  filterByYear: PropTypes.number,
};

export default FilterSelector;
