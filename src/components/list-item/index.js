import { GamesStore } from "../../state/store";

const ListItem = ({ game }) => {

    const toggleGameSelected = GamesStore((state) => state.toggleGameSelected);
    const deleteGame = GamesStore((state) => state.deleteGame)

    return (
        <li>
            <span onClick={() => toggleGameSelected(game)}>
                { game.name }
                { game.selected && <strong> selected</strong> }
            </span>
            <button onClick={() => deleteGame(game)}>Delete game</button>
        </li>
    );
};

export default ListItem;