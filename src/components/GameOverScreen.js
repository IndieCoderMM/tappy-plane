import React from 'react';
import GameoverText from '../assets/textGameOver.png';
import { NavLink } from 'react-router-dom';
import S from './Styled';

const GameOverScreen = ({ restart }) => {
  return (
    <S.Screen color="rgba(50, 50, 50, 0.5)">
      <S.TitleText img={GameoverText} />
      <S.Button onClick={() => restart()}>Play Again</S.Button>
      <NavLink to="/leaderboard">
        <S.Button>Leaderboard</S.Button>
      </NavLink>
    </S.Screen>
  );
};

export default GameOverScreen;
