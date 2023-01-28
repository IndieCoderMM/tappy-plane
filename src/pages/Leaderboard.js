import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import S from '../components/Styled';
import {
  getHiScore,
  getUserName,
  storeUserName,
} from '../utils/storageManager';
import UserForm from '../components/UserForm';
import ScoreDisplay from '../components/ScoreDisplay';

const Leaderboard = () => {
  return (
    <S.BoardDiv>
      <S.Heading>Leaderboard</S.Heading>
      <ScoreDisplay />
      <S.BtnContainer>
        <NavLink to="/">
          <S.Button>Main Menu</S.Button>
        </NavLink>
        <S.Button>Refresh</S.Button>
      </S.BtnContainer>
    </S.BoardDiv>
  );
};

export default Leaderboard;
