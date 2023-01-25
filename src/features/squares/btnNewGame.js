import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { inititalRandomPosiValue } from "./squaresesSlice";
import { randomId, randomValue } from "../../function/randomPosiValue";
const StartGame = styled.button `

`

export const NewGameBtn = () => {
    const squares = useSelector(state => state.squares)
    const dispatch = useDispatch()

    const initialOnClick = e => {
        //clear all squarese
        const toBeClears = squares.filter(square => square.value !== 0)
        toBeClears.map(toBeClear => dispatch(inititalRandomPosiValue({ id: toBeClear.id, value: 0 })))

        // assign random number to two different squaresses
        const newIds = randomId(squares, 2)
        const newObjs = newIds.map( newId => ({id: newId, value:randomValue()}))
        newObjs.map(newObj => dispatch(inititalRandomPosiValue({ id: newObj.id, value: newObj.value})))
    }
    return (
        <StartGame onClick={initialOnClick}>New Game</StartGame>
    )
}