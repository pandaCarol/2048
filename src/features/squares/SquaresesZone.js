import React from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { mergeMetrix } from "../../function/valueUpdate";
import { updatePosiValue } from "./squaresesSlice";
import { randomId, randomValue } from "../../function/randomPosiValue";

const SquaresesWrapping = styled.div`
    margin: 16px auto;
    max-width: 50%;
    display: grid;
    grid-template-columns:repeat(4, 1fr);
}
`
const Squarese = styled.div`
    width: 100%;
    height 50px; 
    border: 1px solid gray;
    text-align: center;
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


