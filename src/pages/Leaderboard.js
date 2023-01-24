import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import S from '../components/Styled';
import {
  getHiScore,
  getUserName,
  storeUserName,
} from '../utils/storageManager';
import { cleanScores } from '../utils/scoreManager';
import UserForm from '../components/UserForm';

const LEADERBOARD_API_URL =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const LEADERBOARD_API_KEY = '8TbHPOdTqye2wFjNL6xs';
const SCORE_URL = LEADERBOARD_API_URL + LEADERBOARD_API_KEY + '/scores/';

const postScores = async (scoreData) => {
  const response = await fetch(SCORE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreData),
  });
  return response.ok;
};

const BoardDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  max-width: 548px;
  margin: 0 auto;
  gap: 1rem;
`;

const Heading = styled.h2`
  color: yellow;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
`;

const Board = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: #000;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: inset 0 3px 14px rgba(30, 30, 130, 0.4);
  min-height: 250px;
  max-height: 400px;
  overflow-y: scroll;

  & li {
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

const Info = styled.p`
  text-align: center;
  color: ${(props) => props.color || 'white'};
`;
const player = { user: getUserName(), score: getHiScore() };

const Leaderboard = () => {
  const [scoreList, setScoreList] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const getScores = async () => {
      const response = await fetch(SCORE_URL);
      const data = await response.json();
      const scores = cleanScores(data.result).sort((a, b) => b.score - a.score);
      const playerData = scores.find(
        (i) => i.user.toLowerCase() === player.user.toLowerCase()
      );
      if (player.score > playerData.score) {
        playerData.score = player.score;
        postScores(player);
      }
      setScoreList(scores);
      setFetching(false);
      showPopUp();
    };
    getScores();
  }, [fetching]);

  const showPopUp = () => {
    setPopUp(true);
    setTimeout(() => setPopUp(false), 3000);
  };

  const joinLeaderboard = (name) => {
    storeUserName(name);
    player.user = name;
    postScores(player);
  };

  return (
    <BoardDiv>
      <Heading>Leaderboard</Heading>
      <Board>
        {scoreList.map((scoreItem, i) => (
          <li key={i}>
            <span style={{ minWidth: '40%' }}>{`${
              i + 1
            }. ${scoreItem.user.toUpperCase()}`}</span>
            <span>{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : ''}</span>
            <span>{scoreItem.score}</span>
          </li>
        ))}
      </Board>
      <BtnContainer>
        <NavLink to="/">
          <S.Button>Main Menu</S.Button>
        </NavLink>
        <S.Button onClick={() => setFetching(true)}>Refresh</S.Button>
      </BtnContainer>
      {player.user === 404 ? (
        <UserForm joinLeaderboard={joinLeaderboard} />
      ) : null}
      {fetching ? <Info>Updating scores...</Info> : null}
      {popUp ? <Info color="green">Leaderboard Updated!</Info> : null}
    </BoardDiv>
  );
};

export default Leaderboard;
