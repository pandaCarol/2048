import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updatePosiValue } from "./squaresesSlice";
import { scoreUpdated } from "../score/scoresSlice";
import { randomId, randomValue } from "../../function/randomPosiValue";

const NewGameWrapping = styled.div`
    max-width 38vw;
    margin: 3px auto;

    display: grid;
    grid-template-columns: 3fr 1fr;

    font: 16px Tahoma, sans-serif;
    color: #696969;
`
const Introduction = styled.div`
    margin: 0.1em;
    padding: 0.1em;
`
const Intro = styled.h5`
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
`
const Rules = styled.p`
    font-size: 13px;
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
`

const StartGame = styled.button `
    margin: auto;
    padding: 0.5em;
    max-height: 60%;
    font: 16px Tahoma, sans-serif;
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
        <Rules>
            <i>Use your arrow keys or buttons below to move the tiles.</i>
        </Rules>
    </>

//When two tiles with the same number touch, they merge into one

export const NewGameBtn = () => {
    const squares = useSelector(state => state.squares)
    const dispatch = useDispatch()

    const initialOnClick = e => {
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
    return (
        <NewGameWrapping>
            <Introduction>{gameInfo}</Introduction>
            <StartGame onClick={initialOnClick}>New Game</StartGame>
        </NewGameWrapping>
        
    )
}