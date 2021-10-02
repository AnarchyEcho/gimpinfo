import styled from 'styled-components'
import Image from 'next/image'

const Username = styled.h3`
  text-transform: capitalize;
`
const Container = styled.div`
    background-image: url('https://www.runescape.com/img/rsp777/hiscores/scroll_middle.gif');
    background-repeat: repeat-y;
    background-size:100% auto;
    height: 100%;
    overflow-y: hidden;
`
const Stats = styled.p`
    text-transform: capitalize;
`

export default function HiScore(props) {

    const skillsArray = Object.keys(props.skills)

    return (

        <Container>
            <Username>{props.player.username}</Username>

            {skillsArray.map( x =>
                <Stats key={x}><Image src = {props.skills[x].picture} alt ={x} width="15px" height="15px" /> {x} level: <b> {props.player.skills[x].level} </b></Stats>
            )}
        </Container>
    )
}
