import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import hiscores from 'osrs-json-hiscores'
import {useState, useEffect} from 'react'
const { compare } = require('../hooks/comparePlayers')

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
    ". . . . .";
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
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "TitleName"
    "Links";
`
const TitleName = styled.h1`
  grid-area: TitleName;
`
const Links = styled.div`
  grid-area: Links;
  display: flex;
  column-gap: 10px;
`
const Player = styled.div`

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
    const skills = await skillsRes.json()

    const bossesRes = await fetch('https://gimpinfo.vercel.app/api/Bosses')
    const bosses = await bossesRes.json()

    const echoRes = await hiscores.getStats(`EchoGIM`)
    // const echoRes = await hiscores.getStats(`anarchyrunic

    const funfunRes = await hiscores.getStats(`GIMFunFun`)
    // const funfunRes = await hiscores.getStats(`agentfunfun`)

    const emeraldRes = await hiscores.getStats(`Emerald12GIM`)
    // const emeraldRes = await hiscores.getStats(`Emerald12`)

    // const ybRes = await hiscores.getStats(`YB GimpMad`)
    // const ybRes = await hiscores.getStats(`yb ironmad`)
    // const ybRes = await hiscores.getStats(`UnderDropRat`)
    const ybRes = await hiscores.getStats(`YB Mad GIMP`)

    const fixiRes = await hiscores.getStats(`GIM Fixi`)
    // const fixiRes = await hiscores.getStats(`skolebolle`)

    const playerArray = [echoRes, funfunRes, emeraldRes, ybRes, fixiRes]

    return {
      props: {
        playerArray,
        skills,
        bosses,
      },
      revalidate: 30,
    }
  }

export default function Home({ playerArray, skills, bosses }) {

  let playerSkills = compare(...playerArray, skills)
  const [check, setCheck] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
        document.location.reload()
        setCheck(check + 1)
    }, 90000);
    return () => clearInterval(id);
  }, [check])

  return (
    <Container>
      <Head>
        <title>GIMP Info</title>
        <meta name="description" content="Created by Echo and Tom" />
        <link rel="icon" href="/GimIconTransparent.png" />
        <meta property="og:image" content="/GimIconTransparent.png" />
      </Head>

      <Banner>
        <Image src='/rslogo3.png' alt="OSRS Banner" width="1000" height="200" />
      </Banner>

      <Title>
        <TitleName>UnderDropRate</TitleName>
        <Links>
          <Link href="/edit" ><a title="Quests Editor">Quests</a></Link>
          <Link href="/bank" ><a title="Group Bank">Bank</a></Link>
        </Links>
      </Title>

      <Main>

        {playerArray.map(player =>
          <Player key={player.name}>
            <HiScore player={player.main} skills={skills} playerSkills={playerSkills} bosses={bosses}/>
          </Player>
        )}

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