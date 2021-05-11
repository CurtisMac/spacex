import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//components
import Button from "./Button";
import Logo from "./Logo";

//styles
const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 30px 0 10px;
`;

const Header = ({ dispatch, setError }) => {
  return (
    <StyledHeader>
      <Logo />
      <Button dispatch={dispatch} setError={setError} />
    </StyledHeader>
  );
};

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Header;
