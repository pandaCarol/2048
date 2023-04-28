import React, { Fragment } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updatePosiValue } from "./squaresesSlice";
import { scoreUpdated } from "../score/scoresSlice";
import { randomId, randomValue } from "../../function/randomPosiValue";
import { statusUpdated } from "../status/statusSlice";

const NewGameWrapping = styled.div`
    max-width: min(550px,30vw);
    min-width: min(400px,max(240px,70vw));
    margin: 1vw auto;
    padding: 0.5vw 1.5vw;

    display: grid;
    grid-template-columns: 2.5fr 1fr;

    font: 16px Tahoma, sans-serif;
    color: #696969;
    font-size: ${document.documentElement.clientWidth > 425 ? '16px' : '12px'};
`
const Introduction = styled.div`
    margin: 0.5vw;
    padding: 0.1em;
`
const Intro = styled.h5`
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
`
const Rules = styled.p`
    font-size: ${document.documentElement.clientWidth > 425 ? '14px' : '10px'};
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
`

const StartGame = styled.button `
    margin: 0.5vw;
    padding: 3px;
    text-align: center;
    max-height: 80%;
    font: 16px Tahoma, sans-serif;
    font-size: ${document.documentElement.clientWidth > 425 ? '16px' : '12px'};
    color: #f5f5f5;
    border-radius: 0.2em;
    border: none;
    background-color: #8b4513;
    opacity: 0.6;
    :hover{
        opacity: 0.8;
        cursor: pointer;
    }
`

const gameInfo = <>
        <Intro>Start to Play 2048 Game online</Intro>
        <Rules><i>Use your arrow keys or buttons below to move the tiles.</i></Rules>
    </>

//When two tiles with the same number touch, they merge into one
export const StartNewGame = ({children}) => {
    const squares = useSelector(state => state.squares)
    const status = useSelector(state => state.status)
    const dispatch = useDispatch()

    const initialOnClick = e => {
        //block the 'you win' page
        const statusUpdate = 'start'
        console.log('start to change status')
        dispatch(statusUpdated({status: statusUpdate}))
        console.log('status has been changed')

        //clear all squarese and current score value
        const toBeClears = squares.filter(square => square.value !== 0)
        toBeClears.map(toBeClear => dispatch(updatePosiValue({ id: toBeClear.id, value: 0 })))
        dispatch(scoreUpdated({id: 'SCORE', value: 0}))

        // assign random number to two different squaresses
        const newIds = randomId(squares, 2)
        const newObjs = newIds.map( newId => ({id: newId, value:randomValue()}))
        //console.log(newObjs)
        newObjs.map(newObj => dispatch(updatePosiValue({ id: newObj.id, value: newObj.value})))
    }

    return(
        <StartGame onClick={initialOnClick}>{children}</StartGame>
    ) 
}

export const NewGameBtn = () => {
    return (
        <NewGameWrapping>
            <Introduction>{gameInfo}</Introduction>
            <StartNewGame>New Game</StartNewGame>
        </NewGameWrapping>
    )
}
