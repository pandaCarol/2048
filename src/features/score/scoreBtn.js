import styled, { keyframes } from "styled-components"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const ScoreBarWrapping = styled.div`
    display: flex;
    font-family: Tahoma, sans-serif;
    color: #696969;
    position: relative;
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
    font-size: ${document.documentElement.clientWidth > 425 ? '14px' : '11px'};
    font-weight: lighter;
    color: #f5f5f5;
    opacity: 0.7
`
const ScoresValue = styled.h3`
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
    color:  #f0f8ff;
    font-size: ${document.documentElement.clientWidth > 425 ? '18px' : '14px'};
`
const toUpAnimation =  keyframes`
    &
    0% {top: 0; opacity: 0;}
    50% {top: -20%; opacity: 0.8;}
    100% {top: -100%; opacity: 0;}
`

const RoundScore = styled.h2`
    position: absolute;
    top: 0;
    transform: translate(50%, 0%);
    color: yellow;
    opacity: 0;
    animation: ${toUpAnimation} 0.8s ease-in;
`

export const ScoreBar = () => {
    const scores =  useSelector(state => state.scores)
    const [isHidden, setHidden] = useState(true);

    //console.log(scores)
    const scoresBlock = scores.map((score, index) => {
        if (index < 2) {
            return(
                <ScoreInfoWrapping key={score.id}>
                    <ScoresTitle>{score.id}</ScoresTitle>
                    <ScoresValue>{score.value}</ScoresValue>
                </ScoreInfoWrapping>
            ) 
        } 
        
        if (index === 2 && score.value !== 0) {
            return <RoundScore key={score.id} id={score.id}
            >
                +{score.value}
            </RoundScore>
        }
    })
    console.log(document.querySelector('#Round'))

    return(
        <ScoreBarWrapping>
            {scoresBlock}
        </ScoreBarWrapping>
        
    )
    
} 