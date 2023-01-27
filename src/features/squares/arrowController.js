import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updatePosiValue } from "./squaresesSlice";
import { scoreUpdated } from "../score/scoresSlice";
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
        id: 'left',
        mergeGroup: 'row',
        toLoU: true
    },
    right: {
        id: 'right',
        mergeGroup: 'row',
        toLoU: false
    },
    up: {
        id: 'up',
        mergeGroup: 'column',
        toLoU: true
    },
    down: {
        id: 'down',
        mergeGroup: 'column',
        toLoU: false
    }
}

export const Controller = () => {
    const squareses = useSelector(state => state.squares)
    const scores = useSelector(state => state.scores)
    const dispatch = useDispatch()


    const Controller = controllerArr.map((item,index) => {
        return(<ControllerSque key={index} className={item}>{item === 0 ? '' : <button>{item}</button>} </ControllerSque>)
    })

    function valueUpdateKeyUp(e) {
        const eName = (e.target.innerText)

        //find out the index of arrow key in 'ContrllerObject', then get info row or column, and moving direction
        const controllerIndex = Object.keys(ControllerObject).indexOf(eName)
        if (controllerIndex >= 0) {
            const group = Object.values(ControllerObject)[controllerIndex].mergeGroup
            const direction = Object.values(ControllerObject)[controllerIndex].toLoU

             //mergeMetrix output two parts in an array, [updateSque， roundScore]
            const updateGroup = mergeMetrix(squareses, group, direction)

            //updated squares
            const updateSqus = updateGroup[0]
            if (updateSqus.length !== 0) {
                //console.log('run dispatch')
                updateSqus.map(updateSqu => dispatch(updatePosiValue({id: updateSqu.id, value: updateSqu.value})))
                setTimeout(() => dispatch(updatePosiValue({id: randomId(squareses), value: randomValue()})), 500)
            }

            //updated current score and best score
            const updateScore = updateGroup[1] 
            if (updateScore !== 0) {
                //current score
                const scoreV = scores.filter(item => item.id === 'SCORE')
                console.log(scoreV)
                const curScore = scoreV[0].value + updateScore
                dispatch(scoreUpdated({id: 'SCORE', value: curScore}))

                //best score
                const bestScoreV = scores.filter(item => item.id === 'BEST')
                if (curScore > bestScoreV[0].value) {
                    dispatch(scoreUpdated({id: 'BEST', value: curScore}))
                }
            }
        }
    }

    return(
        <ControllerWrapping onClick={valueUpdateKeyUp}>{Controller}</ControllerWrapping>
    )
}