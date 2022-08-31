import './App.css';
import GamesList from './components/game-list';
import Button from './components/button'
import NewGameInput from "./components/new-game-input";
import NewGameText from "./components/new-game-text";

function App() {
  return (
    <>
      <GamesList/>
      <h1>Add new game:</h1>
      <NewGameInput/>
      <NewGameText/>
      <Button/>
    </>
  );
}

export default App;
