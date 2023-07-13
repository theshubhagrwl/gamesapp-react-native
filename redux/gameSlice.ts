import {createSlice} from '@reduxjs/toolkit';
import {GameState} from '../interfaces/interfaces';
//json file that has all our data
import gameData = require('../gamedata/gameData.json');

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
