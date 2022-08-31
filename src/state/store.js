import create from 'zustand'

export const GamesStore = create((set) => ({
    games: [{
        name: 'test game',
        selected: false
    }],
    newGameName: '',
    addGame: (gameName) => set ((state) => ({
        games: [...state.games, {
            name: gameName,
            selected: false
        }]
    })),
    deleteGame: (game) => set((state) => ({
        games: deleteGameFromGames(game, state.games)
    })),
    setNewGameName: (gameName) => set((state) => ({
        newGameName: gameName
    })),
    toggleGameSelected: (game) => set((state) => ({
        games: toggleSelected(game, state.games)
    }))
}));

const deleteGameFromGames = (game, games) => {
    const index = games.indexOf(game);
    const stateGames = [...games]; 
    stateGames.splice(index, 1); 
    return stateGames;
};

const toggleSelected = (game, games) => {
    const index = games.indexOf(game);
    const stateGames = [...games]; 
    const oldSelected = stateGames[index].selected;
    stateGames[index].selected = !oldSelected;
    return stateGames;
};