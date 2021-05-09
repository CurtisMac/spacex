import React from "react";
import styled from "styled-components";

//assets
import logo from "../../assets/logo.png";

//styles
const StyledLogo = styled.div`
  margin: 0 40px;
  @media (max-width: ${(props) => props.theme.sm}) {
    margin: 0 10px 0 30px;
  }
`;
const Image = styled.img`
  max-width: 180px;
  @media (max-width: ${(props) => props.theme.sm}) {
    margin-left: -10px;
  }
`;
const LogoText = styled.span`
  font-size: 1.2em;
  margin-left: -10px;
`;

const Logo = () => {
  return (
    <StyledLogo role="img">
      <Image src={logo} alt="Logo" />
      <LogoText>LAUNCHES</LogoText>
    </StyledLogo>
  );
};

export default Logo;
