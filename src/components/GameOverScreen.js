import React from 'react';
import GameoverText from '../assets/textGameOver.png';
import { NavLink } from 'react-router-dom';
import S from './Styled';

const GameOverScreen = ({ restart, score, hiScore }) => {
  return (
    <S.Screen color="rgba(50, 50, 50, 0.5)">
      <S.TitleText img={GameoverText} />
      <S.ScoreBoard>
        <p>Score: {score}</p>
        <p>Best: {hiScore}</p>
      </S.ScoreBoard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <S.Button onClick={() => restart()}>Play Again</S.Button>
        <NavLink to="/leaderboard">
          <S.Button>Leaderboard</S.Button>
        </NavLink>
      </div>
    </S.Screen>
  );
};

export default GameOverScreen;
