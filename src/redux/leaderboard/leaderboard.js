import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import LeaderboardService from '../../services/LeaderboardService';

export const postScore = createAsyncThunk(
  'leaderboard/addScore',
  async ({ user, score }) => {
    try {
      await LeaderboardService.postScore({ user, score });
      return { user, score };
    } catch (err) {
      return err.message;
    }
  },
);

export const getScores = createAsyncThunk('leaderboard/getScores', async () => {
  try {
    const res = await LeaderboardService.getAllScores();
    return res.data;
  } catch (err) {
    return err.message;
  }
});

const initialState = {
  status: 'idle',
  scores: [],
  error: '',
};

const boardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getScores.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getScores.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.scores = action.payload.result;
      })
      .addCase(getScores.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log(state.error);
      })
      .addCase(postScore.fulfilled, (state, action) => {
        state.scores.push(action.payload);
      });
  },
});

export const selectScores = (state) => state.leaderboard.scores;
export const selectStatus = (state) => state.leaderboard.status;

const { reducer } = boardSlice;
export default reducer;
