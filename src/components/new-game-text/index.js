import { GamesStore } from "../../state/store";

const NewGameText = () => {
    const newGameName = GamesStore((state) => state.newGameName);

    return (
      <p>{newGameName}</p>
    );
}

export default NewGameText;