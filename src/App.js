import logo from './logo.svg';
import './App.css';
import { SquareseBlock } from './features/squares/SquaresesZone';
import { NewGameBtn } from './features/squares/btnNewGame';
import { Controller } from './features/squares/arrowController';
import { HeaderBlock } from './features/score/HeaderZone';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { arrowDetector, valueUpdateKeyUp } from './function/keyboardController';
import { useSelector, useDispatch } from 'react-redux';
import { updatePosiValue } from './features/squares/squaresesSlice';
import { randomId, randomValue } from './function/randomPosiValue';
import { scoreUpdated } from './features/score/scoresSlice';

const MainWrapping = styled.div`
  margin: 0.5vw;
  min-width: 50%;
`

function App() {
  /*
  useEffect(e => {
    document.addEventListener('keyup', handelOnkeyUp )
  })
  */

  const squareses = useSelector(state => state.squares)
  const scores = useSelector(state => state.scores)
  const dispatch = useDispatch()

  const handelOnkeyUp = e => {
    console.log(e.key)
    
    const arrowType = arrowDetector(e)
    const updateGroup = valueUpdateKeyUp(arrowType, squareses)

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

  return (
    <MainWrapping onKeyUp={handelOnkeyUp}>
      <HeaderBlock />
      <NewGameBtn />
      <SquareseBlock />
      <Controller />
    </MainWrapping>
      
   
  );
}

export default App;
