import logo from './logo.svg';
import './App.css';
import { SquareseBlock } from './features/squares/SquaresesZone';
import { NewGameBtn } from './features/squares/btnNewGame';

function App() {
  return (
    <>
      <NewGameBtn />
      <SquareseBlock />
    </>
   
  );
}

export default App;
