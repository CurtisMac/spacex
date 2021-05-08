import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import BGBoldWoff2 from "../assets/font/BrandonGrotesque-Bold.woff2";
import BGBoldWoff from "../assets/font/BrandonGrotesque-Bold.woff";
import BGBoldTtf from "../assets/font/BrandonGrotesque-Bold.ttf";
import BGRegularWoff2 from "../assets/font/BrandonGrotesque-Regular.woff2";
import BGRegularWoff from "../assets/font/BrandonGrotesque-Regular.woff";
import BGRegularTtf from "../assets/font/BrandonGrotesque-Regular.ttf";
import BGRegularItalicWoff2 from "../assets/font/BrandonGrotesque-RegularItalic.woff2";
import BGRegularItalicWoff from "../assets/font/BrandonGrotesque-RegularItalic.woff";
import BGRegularItalicTtf from "../assets/font/BrandonGrotesque-RegularItalic.ttf";
import BGBlackWoff2 from "../assets/font/BrandonGrotesque-Black.woff2";
import BGBlackWoff from "../assets/font/BrandonGrotesque-Black.woff";
import BGBlackTtf from "../assets/font/BrandonGrotesque-Black.ttf";
import BGMediumWoff2 from "../assets/font/BrandonGrotesque-Medium.woff2";
import BGMediumWoff from "../assets/font/BrandonGrotesque-Medium.woff";
import BGMediumTtf from "../assets/font/BrandonGrotesque-Medium.ttf";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Brandon Grotesque';
    src: url(${BGBoldWoff2}) format('woff2'),
      url(${BGBoldWoff}) format('woff'),
      url(${BGBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Brandon Grotesque';
    src: url(${BGRegularWoff2}) format('woff2'),
      url(${BGRegularWoff}) format('woff'),
      url(${BGRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Brandon Grotesque';
    src: url(${BGRegularItalicWoff2}) format('woff2'),
      url(${BGRegularItalicWoff}) format('woff'),
      url(${BGRegularItalicTtf}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Brandon Grotesque';
    src: url(${BGBlackWoff2}) format('woff2'),
      url(${BGBlackWoff}) format('woff'),
      url(${BGBlackTtf}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Brandon Grotesque';
    src: url(${BGMediumWoff2}) format('woff2'),
      url(${BGMediumWoff}) format('woff'),
      url(${BGMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  body {
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.fontColor};
  }

  button {
    display: inline-block;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    text-align: center;
}
`;

export default GlobalStyle;
