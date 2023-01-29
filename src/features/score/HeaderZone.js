import styled from "styled-components"
import { ScoreBar } from "./scoreBtn"

const HeaderWrapping = styled.div`
    max-width: 38vw;
    margin: 0px auto;

    display: grid;
    grid-template-columns:repeat(2, 1fr);
    justify-content: center;
`
const Title = styled.h1`
    margin: auto 0;
    text-align: left;

    font: bold 40px Tahoma, sans-serif;
    letter-spacing: 18px;
    color: #696969;
`

export const HeaderBlock = () => {
    return (
        <HeaderWrapping>
            <Title>2048</Title>
            <ScoreBar />
        </HeaderWrapping>
    )
}