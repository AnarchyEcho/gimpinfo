import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Provider } from 'next-auth/client'

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

export default function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Provider
              options={{
                // * 0  - Disabled (always use cache value)
                // * 60 - Sync session state with server if it's older than 60 seconds
                clientMaxAge: 0,
                keepAlive: 0 }}
              session={pageProps.session} >
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
    </>
  )
}
