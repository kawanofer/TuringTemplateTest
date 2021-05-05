import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    background: #F5F5F5;
    color: #141414;
    font-family: "Manrope", sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body, input, button {
    font-family: "Manrope", sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
