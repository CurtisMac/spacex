import React, { useState } from "react";
import styled from "styled-components";
import DefaultButton from "../StyledButton";
import PropTypes from "prop-types";
import api from "../../adapters/launchesApi";

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

const Button = ({ dispatch, setError }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const data = await api.getAllData().catch((err) => {
      setError("Network error");
    });
    dispatch({ type: "load", payload: data });
    setLoading(false);
  };
  return (
    <StyledButton
      onClick={handleClick}
      disabled={loading}
      className={loading ? "disabled" : ""}
    >
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

Button.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Button;
