import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline:none;
  box-sizing:border-box;
}
  body {
    background-image: url("https://img.freepik.com/premium-vector/abstract-grunge-texture-background-design_336924-4003.jpg?w=826");
    background-size: cover;
    background-position: center center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  @media (width: 1000px) {
    body {
    }
  }
  html {
    height:100%;
    font-size: 62.5%;
  }

  a {
    color: #f6efed;
    text-decoration: none;
    transition: opacity 300ms  all;
    &:hover {
        opacity: .6;
    }
  }
`;
