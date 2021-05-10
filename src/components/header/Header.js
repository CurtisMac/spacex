import React from "react";
import styled from "styled-components";

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

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Button />
    </StyledHeader>
  );
};

export default Header;
