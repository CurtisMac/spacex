import React from "react";
import styled, { withTheme } from "styled-components";

//assets
import img from "../../assets/img/launch-home.png";
import img2x from "../../assets/img/launch-home@2x.png";
import img3x from "../../assets/img/launch-home@3x.png";

//styles
const Image = styled.img`
  width: 100%;
`;

const FeaturedImg = ({ theme, className }) => {
  console.log(theme);
  return (
    <div className={className}>
      <Image
        srcSet={`${img} 534w, ${img2x} 1068w, ${img3x} 1602w`}
        sizes={`(max-width: ${theme.sm}) 534px, (max-width: ${theme.lg}) 1068px, 1602px`}
        src={img}
        alt="rocket launch"
      />
    </div>
  );
};

export default withTheme(FeaturedImg);
