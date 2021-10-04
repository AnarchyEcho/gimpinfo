import styled from 'styled-components'

const Username = styled.h3`
  text-transform: capitalize;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.1em;
    }
`
const Container = styled.div`
    background-image: url('https://www.runescape.com/img/rsp777/hiscores/scroll_middle.gif');
    background-repeat: repeat-y;
    background-size: 100% auto;
    overflow-y: hidden;
`
const Stats = styled.div`
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin-left: 30%;
    margin-right: 20%;
    height: 50%;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
    }
`
const StatsText = styled.p`
    text-indent: 3px;
`
const StatsImage = styled.img`
    width: 25px;
    height: 25px;
`
const HiScoreLine = styled.hr`
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
    border-left: 0;
    height: 25px;
    background-image: url('https://www.runescape.com/img/rsp777/hiscores/scroll_middle.gif');
    background-repeat: repeat-y;
    background-size: 100% auto;
`

export default function HiScore(props) {

    const skillsArray = Object.keys(props.skills)
    const killsArray = Object.keys(props.player.bossRecords)

    return (

        <Container>
            <Username>{props.player.username}</Username>

            {skillsArray.map( x =>
                <Stats key={x}>
                    <StatsImage src={props.skills[x].picture} alt={x} />
                    <StatsText>{x} level: <b> {props.player.skills[x].level} </b></StatsText>
                </Stats>
            )}
            <HiScoreLine />
            {killsArray.map( x =>
                <Stats key={x}>
                    {props.player.bossRecords[x].score >= 0 ? <StatsText>{x} KC: <b> {props.player.bossRecords[x].score} </b></StatsText> : null}
                </Stats>)}
        </Container>
    )
}
