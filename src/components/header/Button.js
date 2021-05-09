import React from "react";
import styled from "styled-components";

//assets
import img from "../../assets/icon/refresh.png";
import img2x from "../../assets/icon/refresh@2x.png";
import img3x from "../../assets/icon/refresh@3x.png";

//styles
const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryBlue};
  color: ${(props) => props.theme.buttonFontColor};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  width: 134px;
  height: 42px;
`;
const Icon = styled.img`
  vertical-align: middle;
  height: 14px;
  margin-left: 8px;
  @media (max-width: ${(props) => props.theme.xs}) {
    display: none;
  }
`;
const Text = styled.span`
  vertical-align: middle;
`;

const Button = () => {
  return (
    <StyledButton>
      <Text>Reload Data</Text>
      <Icon
        srcSet={`${img}, ${img2x} 2x, ${img3x} 3x`}
        src={img}
        alt="refresh"
      />
    </StyledButton>
  );
};

export default Button;
