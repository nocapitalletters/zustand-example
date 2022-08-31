import { GamesStore } from "../../state/store";
import ListItem from "../list-item";

const GamesList = () => {

    const games = GamesStore((state) => state.games);
    
    return (
        <>
            <ul>
                {games.map((game) => (
                    <ListItem game={game} key={game}/>
                ))}
            </ul>
            
        </>
    );
};

export default GamesList