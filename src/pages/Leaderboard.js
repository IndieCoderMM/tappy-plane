import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import S from '../components/Styled';
import PlayerForm from '../components/PlayerForm';
import ScoreDisplay from '../components/ScoreDisplay';
import useLocalStorage from '../hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import {
  postScore,
  selectScores,
  getScores,
  selectStatus,
} from '../redux/leaderboard/leaderboard';
import ScoreCleaner from '../utils/scoreCleaner';

const Leaderboard = () => {
  const [data, setData] = useLocalStorage();

  const dispatch = useDispatch();
  const scores = useSelector(selectScores);
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (status === 'idle') dispatch(getScores());
  }, [status, dispatch]);

  const cleanedScores = ScoreCleaner(scores);
  cleanedScores.sort((a, b) => b.score - a.score);

  const register = (name) => {
    setData({ ...data, user: name });
    dispatch(postScore({ user: name, score: data.score }));
  };

  const refresh = () => {
    let registered = false;
    if (data.user === 'null') return;
    for (let i of cleanedScores) {
      if (i.user === data.user) {
        registered = true;
        if (i.score < data.score) dispatch(postScore(data));
        break;
      }
    }
    if (!registered) dispatch(postScore(data));
  };

  return (
    <S.BoardDiv>
      <S.Heading>Leaderboard</S.Heading>
      <ScoreDisplay scores={cleanedScores} />
      <S.BtnContainer>
        <NavLink to="/">
          <S.Button>Main Menu</S.Button>
        </NavLink>
        <S.Button onClick={refresh}>Refresh</S.Button>
      </S.BtnContainer>
      {data.user !== 'null' ? null : <PlayerForm register={register} />}
    </S.BoardDiv>
  );
};

export default Leaderboard;
