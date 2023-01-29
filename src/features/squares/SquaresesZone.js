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
    background-color: ${props => squColor(props.value)};
    box-shadow: ${props => props.value > 512 ? '0 0 12px #ffff00' : 0};
    color: ${props => {
        if (props.value>9 && props.value <130) {
            return '#f0f8ff'
        } else if (props.value > 2048 ){
            return 'rgba(255, 255, 0, 1)'
        } else {
            return 'black'
        }
    }}
`
const Values = styled.p`
    font-size: 24px;
    font-weight: 700;
`
function squColor (value) {
    switch(value) {
        case 2: 
            return('rgba(240, 255, 240, 0.7)');
        case 4: 
            return('rgba(255, 255, 240, 0.8)');
        case 8: 
            return('rgba(255, 200, 120, 0.9)');
        case 16: 
            return('rgba(255, 150, 77, 0.9)');
        case 32: 
            return('rgba(255, 100, 0, 0.9)');
        case 64: 
            return('rgba(255, 36, 0, 0.9)');
        case 128: 
            return('rgba(255, 0, 0, 1)');
        case 256: 
            return('rgba(255, 215, 0, 1)');
        case 512: 
            return('rgba(255, 255, 102, 0.9)');
        case 1024: 
            return('rgba(255, 255, 51, 0.9)');
        case 2048: 
            return('rgba(255, 255, 0, 1)');
        case 4096: 
            return('rgba(255, 20, 147, 0.5)');
        case 8192: 
            return('rgba(255, 20, 147, 0.8)');
        case 16384: 
            return('rgba(255, 20, 147, 1)');
        default:
            return('rgba(205, 133, 63, 0.5)');
    }
}

export const SquareseBlock = () => {
    const squareses = useSelector(state => state.squares)
    //console.log(squareses)
   
    const squareseBlock = squareses.map( (square, index) => {
        return (
            <Squarese key={index} value={square.value}><Values>{square.value === 0 ? '' : square.value}</Values></Squarese>
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


