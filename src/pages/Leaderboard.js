import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import S from '../components/Styled';

const BoardDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Heading = styled.h2`
  color: #fff;
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
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

const Leaderboard = () => {
  return (
    <BoardDiv>
      <Heading>Leaderboard</Heading>
      <Board>
        <li>
          <span>User</span>
          <span>Score</span>
        </li>
        <li>
          <span>User</span>
          <span>Score</span>
        </li>
        <li>
          <span>User</span>
          <span>Score</span>
        </li>
      </Board>
      <BtnContainer>
        <NavLink to="/">
          <S.Button>Main Menu</S.Button>
        </NavLink>
        <S.Button>Refresh</S.Button>
      </BtnContainer>
    </BoardDiv>
  );
};

export default Leaderboard;
