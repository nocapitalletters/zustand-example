import { GamesStore } from "../../state/store";

const NewGameInput = () => {
    const newGameName = GamesStore((state) => state.newGameName);
    const setNewGameName = GamesStore((state) => state.setNewGameName);
    
    return <input value={newGameName} onChange={(e) => setNewGameName(e.target.value)} />
}

export default NewGameInput;