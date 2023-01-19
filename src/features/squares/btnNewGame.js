import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { inititalRandomPosiValue } from "./squaresesSlice";

const StartGame = styled.button `

`

export const NewGameBtn = () => {
    const dispatch = useDispatch()
    const onClick = e => {
        dispatch(inititalRandomPosiValue())
        dispatch(inititalRandomPosiValue())
    }
    return (
        <StartGame onClick={onClick}>New Game</StartGame>
    )
}