import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline:none;
  box-sizing:border-box;
}
  body {
    background: ${(props) => props.theme.colors.primary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  html {
    font-size: 62.5%;
  }

  a {
    color: #125258;
    text-decoration: none;
    transition: opacity 300ms  all;
    &:hover {
        opacity: .6;
    }
  }
`;
