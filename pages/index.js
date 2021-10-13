import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { Hiscores } from 'oldschooljs'
import { useRouter } from 'next/router';
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
    
    const echoRes = await Hiscores.fetch(`EchoGIM`)
    // const echoRes = await Hiscores.fetch(`anarchyrunic`)
    const echo = JSON.parse(JSON.stringify(echoRes))
  
    const funfunRes = await Hiscores.fetch(`GIMFunFun`)
    // const funfunRes = await Hiscores.fetch(`agentfunfun`)
    const funfun = JSON.parse(JSON.stringify(funfunRes))
    
    const emeraldRes = await Hiscores.fetch(`Emerald12GIM`)
    // const emeraldRes = await Hiscores.fetch(`Emerald12`)
    const emerald = JSON.parse(JSON.stringify(emeraldRes))
    
    const ybRes = await Hiscores.fetch(`YB GimpMad`)
    // const ybRes = await Hiscores.fetch(`yb ironmad`)
    const yb = JSON.parse(JSON.stringify(ybRes))
    
    const fixiRes = await Hiscores.fetch(`GIM Fixi`)
    // const fixiRes = await Hiscores.fetch(`skolebolle`)
    const fixi = JSON.parse(JSON.stringify(fixiRes))
  
    
    const playerArray = [echo, funfun, emerald, yb, fixi]
    
    
    
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
  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  }
  useEffect(() => {
    const id = setInterval(() => {
        document.location.reload()
        setCheck(check + 1)
    }, 30000);
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
        <Image src='https://www.runescape.com/img/rsp777/title2/rslogo3.png' alt="OSRS Banner" width="1000" height="200" />
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
          <Player key={player.username}>
            <HiScore player={player} skills={skills} playerSkills={playerSkills} bosses={bosses}/>
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