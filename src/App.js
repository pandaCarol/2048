import logo from './logo.svg';
import './App.css';
import { SquareseBlock } from './features/squares/SquaresesZone';
import { NewGameBtn, Gamerules } from './features/squares/btnNewGame';
//import { Controller } from './features/squares/arrowController';
import { HeaderBlock } from './features/score/HeaderZone';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { arrowDetector, valueUpdateKeyUp } from './function/keyboardController';
import { useSelector, useDispatch } from 'react-redux';
import { updatePosiValue } from './features/squares/squaresesSlice';
import { randomId, randomValue } from './function/randomPosiValue';
import { scoreUpdated } from './features/score/scoresSlice';
import { statusUpdated } from './features/status/statusSlice';

const MainWrapping = styled.div`
  margin: 0.5vh auto;
  max-width: max(750px, min(750px, 75vw));
  min-width: max(300px, 60vw);
`

function App() {
  const squareses = useSelector(state => state.squares)
  const scores = useSelector(state => state.scores)
  const status = useSelector(state => state.status)
  const dispatch = useDispatch()

  const [operations, setOperations] = useState(0)
  const [isStart, setIsStart] = useState(true);


  useEffect(() => {
    if (isStart && operations !== 0) {
      setTimeout(() => dispatch(updatePosiValue({id: randomId(squareses), value: randomValue()})), 100)
    }
  }, [operations])

  const handelOnkeyUp = e => {
    console.log(e.key) 
    console.log(status)

    const arrowType = arrowDetector(e)
    const updateGroup = valueUpdateKeyUp(arrowType, squareses)

    //updated squares
    const updateSqus = updateGroup[0]
    if (updateSqus.length !== 0) {
        //console.log('run dispatch')
        updateSqus.map(updateSqu => {
          dispatch(updatePosiValue({id: updateSqu.id, value: updateSqu.value}))
        })
        //setTimeout(() => dispatch(updatePosiValue({id: randomId(newSqu), value: randomValue()})), 500)
        setOperations(previous => previous + 1)
    }

    //updated current score and best score
    const updateScore = updateGroup[1]
    if (updateScore !== 0) {
        //round score
        dispatch(scoreUpdated({id: 'Round', value: updateScore}))

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

    //to check win
    const isWin = updateGroup[2]
    if (isWin) {
      const statusUpdate = 'break'
      dispatch(statusUpdated({status: statusUpdate}))
      setIsStart(previous => !previous)
    }
  
  }

  return (
    <MainWrapping onKeyUp={handelOnkeyUp}>
      <HeaderBlock />
      <NewGameBtn />
      <SquareseBlock />
    </MainWrapping>
      
   
  );
}

export default App;
