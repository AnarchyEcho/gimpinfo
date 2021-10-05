import styled, {ThemeProvider} from 'styled-components'

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
    color:${props => props.theme.color};
    font-weight: ${props => props.theme.weight};
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
    const cluesArray = Object.keys(props.player.clues)
    const killsArray = Object.keys(props.player.bossRecords)
    const theme = {color:"green", weight: "bold"}
    const noneTheme = {color:"inherit", weight: "inherit"}

    return (

        <Container>
            <Username>{props.player.username}</Username>

            {skillsArray.map( x =>
                <ThemeProvider theme={props.highestPlayer[x].player === props.player.username ? theme : noneTheme} key={x}>
                    <Stats>
                        <StatsImage src={props.skills[x].picture} alt={x} />
                        <StatsText>{x} level: <b> {props.player.skills[x].level} </b></StatsText>
                    </Stats>
                </ThemeProvider>
            )}

            <HiScoreLine />

            {cluesArray.map( x =>
                <Stats key={x}>
                    {props.player.clues[x].score >= 0 ? <StatsText>{x} Clues: <b> {props.player.clues[x].score} </b></StatsText> : null}
                </Stats>)}

            <HiScoreLine />

            {killsArray.map( x =>
                <Stats key={x}>
                    {props.player.bossRecords[x].score >= 0 ? <StatsText>{x} KC: <b> {props.player.bossRecords[x].score} </b></StatsText> : null}
                </Stats>)}
        </Container>
    )
}
