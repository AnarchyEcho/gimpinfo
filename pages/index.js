import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
import { Hiscores } from 'oldschooljs'

const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr; 
  grid-template-rows: 0.5fr 0.1fr 1fr 0.1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "Banner"
    "Title"
    "Main"
    "Footer"; 
`
const Main = styled.div`
  width: 100%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Echo Funfun Emerald YB";
  justify-items: center;
`
const Banner = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: Banner;
`
const Title = styled.div`
  justify-self: center;
  grid-area: Title;
`
const Username = styled.h3`
  text-transform: capitalize;
`
const Echo = styled.div`
  text-align: center;
  grid-area: Echo;
`
const Funfun = styled.div`
  text-align: center;
  grid-area: Funfun;
`
const Emerald = styled.div`
  text-align: center;
  grid-area: Emerald;
`
const YB = styled.div`
  text-align: center;
  grid-area: YB;
`
const Footer = styled.div`
  width: 100vw;
  height: 100px;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: Footer;
`

export async function getStaticProps(context) {
  const echoRes = await Hiscores.fetch(`anarchyrunic`)
  const echo = JSON.parse(JSON.stringify(echoRes))

  const funfunRes = await Hiscores.fetch(`agentfunfun'`)
  const funfun = JSON.parse(JSON.stringify(funfunRes))

  const emeraldRes = await Hiscores.fetch(`emerald12`)
  const emerald = JSON.parse(JSON.stringify(emeraldRes))

  const ybRes = await Hiscores.fetch(`yb ironmad`)
  const yb = JSON.parse(JSON.stringify(ybRes))

  return {
    props: {
      echo,
      funfun,
      emerald,
      yb
    },
  }
}

export default function Home({ echo, funfun, emerald, yb }) {

  return (
    <Container>
      <Head>
        <title>GIMP Info</title>
        <meta name="description" content="Created by Echo and Tom" />
        <link rel="icon" href="/GimIconTransparent.png" />
        <meta property="og:image" content="/GimIconTransparent.png" />
      </Head>

        <Banner>
          <Image src='https://www.runescape.com/img/rsp777/title2/rslogo3.png' alt="OSRS Banner" width="1000" height="200" />
        </Banner>

        <Title>
          <h1>Names of the degens</h1>
        </Title>

      <Main>

        <Echo>
          <Username>{echo.username}</Username>
          <p>Overall level: <b>{echo.skills.overall.level}</b></p>
          <p>Attack level: <b>{echo.skills.attack.level}</b></p>
        </Echo>
1
        <Funfun>
          <Username>{funfun.username}</Username>
          <p>Overall level: <b>{funfun.skills.overall.level}</b></p>
        </Funfun>

        <Emerald>
          <Username>{emerald.username}</Username>
          <p>Overall level: <b>{emerald.skills.overall.level}</b></p>
        </Emerald>

        <YB>
          <Username>{yb.username}</Username>
          <p>Overall level: <b>{yb.skills.overall.level}</b></p>
        </YB>

      </Main>

      <Footer>
          <span>
            Powered by 
            <a href="https://github.com/KodeAndre" target="_blank" rel="noopener noreferrer"><b> Echo </b></a> 
            and
            <a href="https://github.com/Tomkhcoding" target="_blank" rel="noopener noreferrer"><b> Tom</b></a>
          </span>
      </Footer>
    </Container>
  )
}