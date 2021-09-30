import styled from 'styled-components'

import Head from 'next/head'
import Image from 'next/image'

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Main = styled.div`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
`

import { Hiscores } from 'oldschooljs'

export async function getStaticProps(context) {
  const echoRes = await Hiscores.fetch(`anarchyrunic`)
  console.log(echoRes)
  const echo = JSON.stringify(echoRes.skills.overall)

  return {
    props: {
      echo,
    },
  }
}

export default function Home({ echo }) {

  return (
    <Container>
      <Head>
        <title>GIMP Info</title>
        <meta name="description" content="Created by Echo and Tom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Names of the degens</h1>
        <h3>Echo GIM, overall level: {echo}</h3>
        <h3>GIMFunFun</h3>
        <h3>Emerald12 GIM</h3>
      </Main>

      <Footer>
        <a
          href="https://github.com/KodeAndre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Echo and Tom
        </a>
      </Footer>
    </Container>
  )
}