import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
import { Hiscores } from 'oldschooljs'

const Container = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: grid;
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
  console.log(skills)

  const echoRes = await Hiscores.fetch(`anarchyrunic`)
  const echo = JSON.parse(JSON.stringify(echoRes))

  const funfunRes = await Hiscores.fetch(`agentfunfun`)
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
          <p>Defence level: <b>{echo.skills.defence.level}</b></p>
          <p>Strength level: <b>{echo.skills.strength.level}</b></p>
          <p>Hitpoints level: <b>{echo.skills.hitpoints.level}</b></p>
          <p>Ranged level: <b>{echo.skills.ranged.level}</b></p>
          <p>Prayer level: <b>{echo.skills.prayer.level}</b></p>
          <p>Magic level: <b>{echo.skills.magic.level}</b></p>
          <p>Cooking level: <b>{echo.skills.cooking.level}</b></p>
          <p>Woodcutting level: <b>{echo.skills.woodcutting.level}</b></p>
          <p>Fletching level: <b>{echo.skills.fletching.level}</b></p>
          <p>Fishing level: <b>{echo.skills.fishing.level}</b></p>
          <p>Firemaking level: <b>{echo.skills.firemaking.level}</b></p>
          <p>Crafting level: <b>{echo.skills.crafting.level}</b></p>
          <p>Smithing level: <b>{echo.skills.smithing.level}</b></p>
          <p>Mining level: <b>{echo.skills.mining.level}</b></p>
          <p>Herblore level: <b>{echo.skills.herblore.level}</b></p>
          <p>Agility level: <b>{echo.skills.agility.level}</b></p>
          <p>Thieving level: <b>{echo.skills.thieving.level}</b></p>
          <p>Slayer level: <b>{echo.skills.slayer.level}</b></p>
          <p>Farming level: <b>{echo.skills.farming.level}</b></p>
          <p>Runecrafting level: <b>{echo.skills.runecraft.level}</b></p>
          <p>Hunter level: <b>{echo.skills.hunter.level}</b></p>
          <p>Construction level: <b>{echo.skills.construction.level}</b></p>
        </Echo>

        <Funfun>
          <Username>{funfun.username}</Username>
          <p>Overall level: <b>{funfun.skills.overall.level}</b></p>
        </Funfun>

        <Emerald>
          <Username>{emerald.username}</Username>
          <p>Overall level: <b>{emerald.skills.overall.level}</b></p>
          <Image src='https://oldschool.runescape.wiki/images/8/86/Agility_icon.png' alt="OSRS Banner" width="50" height="50" />
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