import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-900: #181b23;
    --pink-800: #d53f8c;
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

  a {
    text-decoration: none;
  }

  main {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;

    .wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: top;
      margin: 0 auto;

      .title {
        font-size: 4rem;
        text-align: center;
        padding: 2rem;
      }

      .taskContainer {
        display: flex;
        gap: 1.6rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding: 1.6rem;
      }

    }
  }

`
