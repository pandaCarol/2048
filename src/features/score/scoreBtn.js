import styled from "styled-components"
import { useSelector } from "react-redux"

const ScoreBarWrapping = styled.div`
    display: flex;

    font: 20px Tahoma, sans-serif;
    color: #696969;
`

const ScoreInfoWrapping = styled.div`
    width: 100%;
    margin: 0.33em;
    text-align: center;
    border-radius: 0.2em;
    background-color: #cd853f;
    opacity: 0.8

`
const ScoresTitle = styled.h4`
    margin-block-start: 0.33em;
    margin-block-end: 0.33em;
    font-size: 14px;
    font-weight: lighter;
    color: #f5f5f5;
    opacity: 0.7
`
const ScoresValue = styled.h3`
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
    color:  #f0f8ff;
    
`

export const ScoreBar = () => {
    const scores =  useSelector(state => state.scores)
    console.log(scores)
    const scoresBlock = scores.map(score => {
        return(
            <ScoreInfoWrapping key={score.id}>
                <ScoresTitle>{score.id}</ScoresTitle>
                <ScoresValue>{score.value}</ScoresValue>
            </ScoreInfoWrapping>
        )
    })

    return(
        <ScoreBarWrapping>{scoresBlock}</ScoreBarWrapping>
    )

} 