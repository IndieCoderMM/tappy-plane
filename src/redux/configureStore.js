import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './leaderboard/leaderboard';

export default configureStore({
  reducer: {
    leaderboard: boardReducer,
  },
});
