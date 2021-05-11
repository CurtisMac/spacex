import React from "react";
import ReactSelect from "react-select";
import styled from "styled-components";

//assets
import img from "../assets/icon/select.png";
import img2x from "../assets/icon/select@2x.png";
import img3x from "../assets/icon/select@3x.png";

const Select = styled(ReactSelect)`
  width: 140px;
  & .react-select__control {
    background-color: ${(props) => props.theme.primaryBlue};
    color: ${(props) => props.theme.fontColor};
    border-radius: 0;
    border: none;
  }
  & .react-select__placeholder,
  .react-select__single-value {
    color: ${(props) => props.theme.buttonFontColor};
  }
  & .react-select__indicator,
  .react-select__clear-indicator {
    color: ${(props) => props.theme.buttonFontColor};
  }
  & .react-select__indicator-separator {
    display: none;
  }
  & .react-select__clear-indicator {
    padding-right: 0;
  }
  & .react-select__indicator,
  .react-select__dropdown-indicator {
    &:hover {
      color: ${(props) => props.theme.buttonFontColor};
      cursor: pointer;
    }
  }
`;

const StyledIcon = styled.img`
  padding: 10px;
`;
const DropdownIndicator = () => (
  <StyledIcon
    srcSet={`${img}, ${img2x} 2x, ${img3x} 3x`}
    src={img}
    alt="dropdown"
  />
);

const Component = (props) => (
  <Select
    classNamePrefix="react-select"
    components={{ DropdownIndicator }}
    {...props}
  />
);
export default Component;
