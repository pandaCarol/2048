import logo from './logo.svg';
import './App.css';
import { SquareseBlock } from './features/squares/SquaresesZone';
import { NewGameBtn } from './features/squares/btnNewGame';
import { Controller } from './features/squares/controller';

function App() {
  return (
    <>
      <NewGameBtn />
      <SquareseBlock />
      <Controller />
    </>
   
  );
}

export default App;
