import logo from './logo.svg';
import './App.css';
import { SquareseBlock } from './features/squares/SquaresesZone';
import { NewGameBtn } from './features/squares/btnNewGame';
import { Controller } from './features/squares/arrowController';
import { HeaderBlock } from './features/score/HeaderZone';
import styled from 'styled-components';

const MainWrapping = styled.div`
  margin: 3%;
  min-width: 50%;
`

function App() {
  return (
    <MainWrapping>
      <HeaderBlock />
      <NewGameBtn />
      <SquareseBlock />
      <Controller />
    </MainWrapping>
      
   
  );
}

export default App;
