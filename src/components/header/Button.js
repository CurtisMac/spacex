import React from "react";
import styled from "styled-components";
import DefaultButton from "../StyledButton";

//assets
import img from "../../assets/icon/refresh.png";
import img2x from "../../assets/icon/refresh@2x.png";
import img3x from "../../assets/icon/refresh@3x.png";

//styles
const StyledButton = styled(DefaultButton)`
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  width: 134px;
  height: 42px;
  .btn_icon {
    height: 14px;
    @media (max-width: ${(props) => props.theme.xs}) {
      display: none;
    }
  }
`;

const Button = () => {
  return (
    <StyledButton>
      <span className="btn_text">Reload Data</span>
      <img
        className="btn_icon"
        srcSet={`${img}, ${img2x} 2x, ${img3x} 3x`}
        src={img}
        alt="refresh"
      />
    </StyledButton>
  );
};

export default Button;
