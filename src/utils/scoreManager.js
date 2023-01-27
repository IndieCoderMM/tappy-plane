export const cleanScores = (scorelist) => {
  const cleanedList = [];
  for (let i of scorelist) {
    let dupes = false;
    for (let j of cleanedList) {
      if (i.user.toLowerCase() === j.user.toLowerCase()) {
        dupes = true;
        if (i.score > j.score) j.score = i.score;
      }
    }
    if (!dupes) cleanedList.push(i);
  }
  return cleanedList;
};

const LEADERBOARD_API_URL =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const LEADERBOARD_API_KEY = 'tCqyE62fDjlFuQ0B0Jqc';
const SCORE_URL = LEADERBOARD_API_URL + LEADERBOARD_API_KEY + '/scores/';

export const postScores = async (scoreData) => {
  const response = await fetch(SCORE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  });
  return response.ok;
};

export const getScores = async () => await fetch(SCORE_URL);
