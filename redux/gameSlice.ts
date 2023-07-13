import {createSlice} from '@reduxjs/toolkit';
import gameData = require('../gamedata/gameData.json');

export interface Game {
  id: number;
  title: string;
  highlightsSupported: boolean;
  fullyOptimized: boolean;
  steamUrl: string;
  publisher: string;
  genre: string;
  status: string;
}

export interface GameState {
  games: Game[];
}
const initialState: GameState = {
  games: gameData,
};

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    getGames: state => {
      state.games;
    },
  },
});

export const {getGames} = gameSlice.actions;

export default gameSlice.reducer;
