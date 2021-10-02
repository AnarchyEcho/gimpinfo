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
export default function HiScore(props) {

    const skillsArray = Object.keys(props.skills)

    return (

        <Container>
            <Username>{props.player.username}</Username>

            {console.log(props.player.skills.agility.level),
            skillsArray.map( x =>
                <p key={x}><Image src = {props.skills[x].picture} alt ={x}/>{x} level: {props.player.skills[x].level}  <b></b></p>
            )}
        </Container>
    )
}