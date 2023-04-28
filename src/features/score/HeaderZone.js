import styled from "styled-components"
import { ScoreBar } from "./scoreBtn"

const HeaderWrapping = styled.div`
    max-width: min(550px,30vw);
    min-width: min(400px,max(240px,70vw));
    margin: 1vw auto;
    padding: 0.5vw 1.5vw;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
`
const Title = styled.h1`
    margin: auto 0;
    text-align: left;

    font: bold 40px Tahoma, sans-serif;
    letter-spacing: ${document.documentElement.clientWidth > 425 ? '3vw' : '1.8vw'};
    color: #696969;
    font-size: ${document.documentElement.clientWidth > 425 ? '40px' : '30px'};
`

export const HeaderBlock = () => {
    return (
        <HeaderWrapping>
            <Title>2048</Title>
            <ScoreBar />
        </HeaderWrapping>
    )
}