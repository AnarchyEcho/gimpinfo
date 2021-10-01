import styled from 'styled-components'
import Image from 'next/image'

const Username = styled.h3`
  text-transform: capitalize;
`

export default function HiScore(props) {
    console.log(props)

    const Container = styled.div`
    background-image: url('https://www.runescape.com/img/rsp777/hiscores/scroll_middle.gif');
    background-repeat: repeat-y;
    background-size:100% auto;
    height:500px;
    position:relative;
    `


    return (

        <Container>
            <Username>{props.emerald.username}</Username>
            <p>Overall level: <b>{props.emerald.skills.overall.level}</b></p>
            
        </Container>
    )
}