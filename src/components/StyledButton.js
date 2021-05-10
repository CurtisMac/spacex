import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryBlue};
  color: ${(props) => props.theme.buttonFontColor};
  padding: 5px 10px;
  .btn_icon {
    vertical-align: middle;
    margin-left: 8px;
  }
  .btn_text {
    vertical-align: middle;
  }
`;

export default StyledButton;
