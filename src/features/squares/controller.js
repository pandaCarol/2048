import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updatePosiValue } from "./squaresesSlice";
import { randomId, randomValue } from "../../function/randomPosiValue";
import { mergeMetrix } from "../../function/valueUpdate";

const ControllerWrapping = styled.div`
    margin: 1px auto;
    max-width: 50%;
    border: 1px solid gray;
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    text-align: center;
`
const ControllerSque=  styled.div`
    width: 32px;
    height: 32px;
    text-align: center;
`
const controllerArr = new Array(9).fill(0)
controllerArr[1] = 'up'
controllerArr[3] = 'left'
controllerArr[5] = 'right'
controllerArr[7] = 'down'

const ControllerObject = {
    left: {
        mergeGroup: 'row',
        toLoU: true
    },
    right: {
        mergeGroup: 'row',
        toLoU: false
    },
    up: {
        mergeGroup: 'column',
        toLoU: true
    },
    down: {
        mergeGroup: 'column',
        toLoU: false
    }
}

export const Controller = () => {
    const squareses = useSelector(state => state.squares)
    const dispatch = useDispatch()

    const Controller = controllerArr.map((item,index) => {
        return(<ControllerSque key={index} className={item}>{item === 0 ? '' : <button>{item}</button>} </ControllerSque>)
    })

    function valueUpdateKeyUp(e) {
        const eName = (e.target.innerText)
        const controllerIndex = Object.keys(ControllerObject).indexOf(eName)
        if (controllerIndex >= 0) {
            const group = Object.values(ControllerObject)[controllerIndex].mergeGroup
            const direction = Object.values(ControllerObject)[controllerIndex].toLoU
            const updateSqus = mergeMetrix(squareses, group, direction)
            updateSqus.map(updateSqu => dispatch(updatePosiValue({id: updateSqu.id, value: updateSqu.value})))
            setTimeout(() => dispatch(updatePosiValue({id: randomId(squareses), value: randomValue()})), 500)
        }
    }

    return(
        <ControllerWrapping onClick={valueUpdateKeyUp}>{Controller}</ControllerWrapping>
    )
}