import React from "react";
import styled from "styled-components"
import { useSelector } from "react-redux"

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
    //console.log(squareses)
   
    const squareseBlock = squareses.map( (square, index) => {
        return (
            <Squarese key={index}>{square.value === 0 ? '' : square.value}</Squarese>
        )
    })

    const valueUpdateKeyUp = (e) => {
        switch(e.target.value) {
            //move to left
            case 37: 
            //move to right
            case 39:
            //move to top
            case 38:
            //move to bottom
            case 40:

            default: 
                return
        }
    }

    return (
        <SquaresesWrapping >
            {squareseBlock}
        </SquaresesWrapping>
    )
}


