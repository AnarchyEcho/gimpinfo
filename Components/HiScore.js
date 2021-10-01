import styled from 'styled-components'
import Image from 'next/image'

const Username = styled.h3`
  text-transform: capitalize;
`

export default function HiScore(props) {

    const Container = styled.div`
    background-image: url('https://www.runescape.com/img/rsp777/hiscores/scroll_middle.gif');
    background-repeat: repeat-y;
    background-size:100% auto;
    height:fit-content;
    position:relative;
    `
    const skillsArray = Object.keys(props.skills)
    console.log(skillsArray)

    return (

        <Container>
            <Username>{props.emerald.username}</Username>

            {skillsArray.map( x =>{
                <p>Overall level: <b>{skillsArray.x}</b></p>
            })}

            <p>Attack level: <b>{props.emerald.skills.attack.level}</b></p>
            <p>Defence level: <b>{props.emerald.skills.defence.level}</b></p>
            <p>Strength level: <b>{props.emerald.skills.strength.level}</b></p>
            <p>Hitpoints level: <b>{props.emerald.skills.hitpoints.level}</b></p>
            <p>Ranged level: <b>{props.emerald.skills.ranged.level}</b></p>
            <p>Prayer level: <b>{props.emerald.skills.prayer.level}</b></p>
            <p>Magic level: <b>{props.emerald.skills.magic.level}</b></p>
            <p>Cooking level: <b>{props.emerald.skills.cooking.level}</b></p>
            <p>Woodcutting level: <b>{props.emerald.skills.woodcutting.level}</b></p>
            <p>Fletching level: <b>{props.emerald.skills.fletching.level}</b></p>
            <p>Fishing level: <b>{props.emerald.skills.fishing.level}</b></p>
            <p>Firemaking level: <b>{props.emerald.skills.firemaking.level}</b></p>
            <p>Crafting level: <b>{props.emerald.skills.crafting.level}</b></p>
            <p>Smithing level: <b>{props.emerald.skills.smithing.level}</b></p>
            <p>Mining level: <b>{props.emerald.skills.mining.level}</b></p>
            <p>Herblore level: <b>{props.emerald.skills.herblore.level}</b></p>
            <p>Agility level: <b>{props.emerald.skills.agility.level}</b></p>
            <p>Thieving level: <b>{props.emerald.skills.thieving.level}</b></p>
            <p>Slayer level: <b>{props.emerald.skills.slayer.level}</b></p>
            <p>Farming level: <b>{props.emerald.skills.farming.level}</b></p>
            <p>Runecrafting level: <b>{props.emerald.skills.runecraft.level}</b></p>
            <p>Hunter level: <b>{props.emerald.skills.hunter.level}</b></p>
            <p>Construction level: <b>{props.emerald.skills.construction.level}</b></p>
        </Container>
    )
}