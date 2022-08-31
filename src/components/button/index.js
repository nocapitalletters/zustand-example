import { GamesStore } from "../../state/store";

const AddGameButton = () => {

    const newGameName = GamesStore((state) => state.newGameName);
    const addGame = GamesStore((state) => state.addGame);
  
    return (
      <button onClick={() => addGame(newGameName)}>Add "{newGameName}"</button>
    );
  }

  export default AddGameButton;