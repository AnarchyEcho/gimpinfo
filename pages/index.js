import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Hiscores } from 'oldschooljs'

import HiScore from '../Components/HiScore'

const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.1fr 1fr 0.1fr;
  gap: 10px 0px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "Echo Funfun Emerald YB Fixi";
  color: #000;
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
const Echo = styled.div`
  grid-area: Echo;
`
const Funfun = styled.div`
  grid-area: Funfun;
`
const Emerald = styled.div`
  grid-area: Emerald;
`
const YB = styled.div`
  grid-area: YB;
`
const Fixi = styled.div`
  grid-area: Fixi;
`
const Footer = styled.div`
  width: 100%;
  height: 100px;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: Footer;
`

export async function getStaticProps(context) {
  const skillsRes = await fetch('https://gimpinfo.vercel.app/api/skills')
  const skills =  await skillsRes.json()

  const echoRes = await Hiscores.fetch(`anarchyrunic`)
  const echo = await JSON.parse(JSON.stringify(echoRes))

  const funfunRes = await Hiscores.fetch(`agentfunfun`)
  const funfun = await JSON.parse(JSON.stringify(funfunRes))

  const emeraldRes = await Hiscores.fetch(`emerald12`)
  const emerald = await JSON.parse(JSON.stringify(emeraldRes))

  const ybRes = await Hiscores.fetch(`yb ironmad`)
  const yb = await JSON.parse(JSON.stringify(ybRes))

  const fixiRes = await Hiscores.fetch(`skolebolle`)
  const fixi = await JSON.parse(JSON.stringify(fixiRes))

  return {
    props: {
      echo,
      funfun,
      emerald,
      yb,
      fixi,
      skills
    },
  }
}

export default function Home({ echo, funfun, emerald, yb, fixi, skills }) {

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
          <Link href="/edit" >Quests</Link>
        </Title>

      <Main>

        <Echo>
          <HiScore player={echo} skills={skills} />
        </Echo>

        <Funfun>
          <HiScore player={funfun} skills={skills} />
        </Funfun>

        <Emerald>
          <HiScore player={emerald} skills={skills} />
        </Emerald>

        <YB>
          <HiScore player={yb} skills={skills} />
        </YB>

        <Fixi>
          <HiScore player={fixi} skills={skills} />
        </Fixi>

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
