import { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#E66767'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;

    body {
      background-color: #FFF8F2;
    }
  }
`
