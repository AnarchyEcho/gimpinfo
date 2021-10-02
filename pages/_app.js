import { createGlobalStyle, ThemeProvider } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: #202020; 
    color: #f5f5f5;
    box-sizing: border-box;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  * {
  box-sizing: border-box;
  }

  /* Scrollbar css */
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #20202000;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #F0CE97;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #F0CE97;
  }

`


const theme = {}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
