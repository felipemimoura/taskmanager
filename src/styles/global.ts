import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-900: #181b23;
    --white: #EEEEF2;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  body{
    background: var(--gray-900);
    color: var(--white);
    -webkit-font-smoothing: antialiased

  }
  body,input, textarea,button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4,h5,strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`
