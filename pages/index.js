import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
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
  color: #000;
`
const YB = styled.div`
  text-align: center;
  grid-area: YB;
`
const Fixi = styled.div`
  text-align: center;
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
  const echo = JSON.parse(JSON.stringify(echoRes))

  const funfunRes = await Hiscores.fetch(`agentfunfun`)
  const funfun = JSON.parse(JSON.stringify(funfunRes))

  const emeraldRes = await Hiscores.fetch(`emerald12`)
  const emerald = JSON.parse(JSON.stringify(emeraldRes))

  const ybRes = await Hiscores.fetch(`yb ironmad`)
  const yb = JSON.parse(JSON.stringify(ybRes))

  const fixiRes = await Hiscores.fetch(`skolebolle`)
  const fixi = JSON.parse(JSON.stringify(fixiRes))

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
          <p>Attack level: <b>{funfun.skills.attack.level}</b></p>
          <p>Defence level: <b>{funfun.skills.defence.level}</b></p>
          <p>Strength level: <b>{funfun.skills.strength.level}</b></p>
          <p>Hitpoints level: <b>{funfun.skills.hitpoints.level}</b></p>
          <p>Ranged level: <b>{funfun.skills.ranged.level}</b></p>
          <p>Prayer level: <b>{funfun.skills.prayer.level}</b></p>
          <p>Magic level: <b>{funfun.skills.magic.level}</b></p>
          <p>Cooking level: <b>{funfun.skills.cooking.level}</b></p>
          <p>Woodcutting level: <b>{funfun.skills.woodcutting.level}</b></p>
          <p>Fletching level: <b>{funfun.skills.fletching.level}</b></p>
          <p>Fishing level: <b>{funfun.skills.fishing.level}</b></p>
          <p>Firemaking level: <b>{funfun.skills.firemaking.level}</b></p>
          <p>Crafting level: <b>{funfun.skills.crafting.level}</b></p>
          <p>Smithing level: <b>{funfun.skills.smithing.level}</b></p>
          <p>Mining level: <b>{funfun.skills.mining.level}</b></p>
          <p>Herblore level: <b>{funfun.skills.herblore.level}</b></p>
          <p>Agility level: <b>{funfun.skills.agility.level}</b></p>
          <p>Thieving level: <b>{funfun.skills.thieving.level}</b></p>
          <p>Slayer level: <b>{funfun.skills.slayer.level}</b></p>
          <p>Farming level: <b>{funfun.skills.farming.level}</b></p>
          <p>Runecrafting level: <b>{funfun.skills.runecraft.level}</b></p>
          <p>Hunter level: <b>{funfun.skills.hunter.level}</b></p>
          <p>Construction level: <b>{funfun.skills.construction.level}</b></p>
        </Funfun>

        <Emerald>
          <HiScore player={emerald} skills={skills} />
        </Emerald>

        <YB>
          <Username>{yb.username}</Username>
          <p>Overall level: <b>{yb.skills.overall.level}</b></p>
          <p>Attack level: <b>{yb.skills.attack.level}</b></p>
          <p>Defence level: <b>{yb.skills.defence.level}</b></p>
          <p>Strength level: <b>{yb.skills.strength.level}</b></p>
          <p>Hitpoints level: <b>{yb.skills.hitpoints.level}</b></p>
          <p>Ranged level: <b>{yb.skills.ranged.level}</b></p>
          <p>Prayer level: <b>{yb.skills.prayer.level}</b></p>
          <p>Magic level: <b>{yb.skills.magic.level}</b></p>
          <p>Cooking level: <b>{yb.skills.cooking.level}</b></p>
          <p>Woodcutting level: <b>{yb.skills.woodcutting.level}</b></p>
          <p>Fletching level: <b>{yb.skills.fletching.level}</b></p>
          <p>Fishing level: <b>{yb.skills.fishing.level}</b></p>
          <p>Firemaking level: <b>{yb.skills.firemaking.level}</b></p>
          <p>Crafting level: <b>{yb.skills.crafting.level}</b></p>
          <p>Smithing level: <b>{yb.skills.smithing.level}</b></p>
          <p>Mining level: <b>{yb.skills.mining.level}</b></p>
          <p>Herblore level: <b>{yb.skills.herblore.level}</b></p>
          <p>Agility level: <b>{yb.skills.agility.level}</b></p>
          <p>Thieving level: <b>{yb.skills.thieving.level}</b></p>
          <p>Slayer level: <b>{yb.skills.slayer.level}</b></p>
          <p>Farming level: <b>{yb.skills.farming.level}</b></p>
          <p>Runecrafting level: <b>{yb.skills.runecraft.level}</b></p>
          <p>Hunter level: <b>{yb.skills.hunter.level}</b></p>
          <p>Construction level: <b>{yb.skills.construction.level}</b></p>
        </YB>

        <Fixi>
          <Username>{fixi.username}</Username>
          <p>Overall level: <b>{fixi.skills.overall.level}</b></p>
          <p>Attack level: <b>{fixi.skills.attack.level}</b></p>
          <p>Defence level: <b>{fixi.skills.defence.level}</b></p>
          <p>Strength level: <b>{fixi.skills.strength.level}</b></p>
          <p>Hitpoints level: <b>{fixi.skills.hitpoints.level}</b></p>
          <p>Ranged level: <b>{fixi.skills.ranged.level}</b></p>
          <p>Prayer level: <b>{fixi.skills.prayer.level}</b></p>
          <p>Magic level: <b>{fixi.skills.magic.level}</b></p>
          <p>Cooking level: <b>{fixi.skills.cooking.level}</b></p>
          <p>Woodcutting level: <b>{fixi.skills.woodcutting.level}</b></p>
          <p>Fletching level: <b>{fixi.skills.fletching.level}</b></p>
          <p>Fishing level: <b>{fixi.skills.fishing.level}</b></p>
          <p>Firemaking level: <b>{fixi.skills.firemaking.level}</b></p>
          <p>Crafting level: <b>{fixi.skills.crafting.level}</b></p>
          <p>Smithing level: <b>{fixi.skills.smithing.level}</b></p>
          <p>Mining level: <b>{fixi.skills.mining.level}</b></p>
          <p>Herblore level: <b>{fixi.skills.herblore.level}</b></p>
          <p>Agility level: <b>{fixi.skills.agility.level}</b></p>
          <p>Thieving level: <b>{fixi.skills.thieving.level}</b></p>
          <p>Slayer level: <b>{fixi.skills.slayer.level}</b></p>
          <p>Farming level: <b>{fixi.skills.farming.level}</b></p>
          <p>Runecrafting level: <b>{fixi.skills.runecraft.level}</b></p>
          <p>Hunter level: <b>{fixi.skills.hunter.level}</b></p>
          <p>Construction level: <b>{fixi.skills.construction.level}</b></p>
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