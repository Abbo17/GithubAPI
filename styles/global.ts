import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box
  }
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  #__next {
  height: 100%;
  }
`;
