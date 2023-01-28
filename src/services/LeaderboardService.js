import axios from 'axios';

const LEADERBOARD_API_URL =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const APP_ID = 'tCqyE62fDjlFuQ0B0Jqc';

const http = axios.create({
  baseURL: LEADERBOARD_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAllScores = () => http.get(`${APP_ID}/scores`);

const postScore = ({ user, score }) =>
  http.post(`${APP_ID}/scores`, { user, score });

const LeaderboardService = { getAllScores, postScore };

export default LeaderboardService;
