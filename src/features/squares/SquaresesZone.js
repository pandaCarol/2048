import React from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { mergeMetrix } from "../../function/valueUpdate";
import { updatePosiValue } from "./squaresesSlice";
import { randomId, randomValue } from "../../function/randomPosiValue";

const SquaresesWrapping = styled.div`
    margin: auto;
    padding: 1.5vw;
    max-width: 35vw;
    height: 35vw;
    display: grid;
    grid-template-columns:repeat(4, 1fr);
    border-radius: 0.4em;
    background-color: #8b4513;
    opacity: 0.5;
    justify-items: center;
    align-items: center;
}
`
const Squarese = styled.div`
    width: 8vw;
    height 8vw;
    text-align: center;
    border-radius: 0.4em;
    background-color: rgba(205, 133, 63, 0.5);

    font-size: 30px;
    color: #f0f8ff;
`

export const SquareseBlock = () => {
    const squareses = useSelector(state => state.squares)
    const dispatch = useDispatch()
    //console.log(squareses)
   
    const squareseBlock = squareses.map( (square, index) => {
        return (
            <Squarese key={index}>{square.value === 0 ? '' : square.value}</Squarese>
        )
    })

    /*
    function valueUpdateKeyUp(e) {
        console.log(e.key)
        
        
        if (e.key === 37) {
            const updateSqus = valueToLeft(squareses)
            updateSqus.map(updateSqu => dispatch(updatePosiValue({id: updateSqu.id, value: updateSqu.value})))
            setTimeout(() => dispatch(updatePosiValue({id: randomId(squareses), value: randomValue()})), 500)
        }
    }
    */

    return (
        <SquaresesWrapping>
            {squareseBlock}
        </SquaresesWrapping>
    )
}


