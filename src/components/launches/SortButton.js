import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//components
import Button from "../StyledButton";

//assets
import img from "../../assets/icon/sort.png";
import img2x from "../../assets/icon/sort@2x.png";
import img3x from "../../assets/icon/sort@3x.png";

//styles
const StyledButton = styled(Button)`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  &:focus {
    border: 1px solid #2684ff;
  }
  &:active {
    border: 1px solid #2684ff;
  }
  .inverted {
    transform: rotate(180deg);
    transition: 1s ease-in-out;
  }
  .btn_icon {
    transition: 0.4s ease-in-out;
  }
`;

const SortButton = ({ order, dispatch }) => {
  const handleClick = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    dispatch({ type: "sort", payload: newOrder });
  };
  const buttonText = order === "asc" ? "Sort Descending" : "Sort Ascending";
  return (
    <StyledButton onClick={handleClick}>
      <span className="btn_text">{buttonText}</span>
      <img
        className={order === "asc" ? "btn_icon" : "btn_icon inverted"}
        srcSet={`${img}, ${img2x} 2x, ${img3x} 3x`}
        src={img}
        alt="sort"
      />
    </StyledButton>
  );
};

SortButton.propTypes = {
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default SortButton;
