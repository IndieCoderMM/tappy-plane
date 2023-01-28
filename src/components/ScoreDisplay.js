import React, { useEffect } from 'react';
import S from './Styled';
import ScoreItem from './ScoreItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  getScores,
  selectScores,
  selectStatus,
} from '../redux/leaderboard/leaderboard';

const ScoreDisplay = () => {
  const dispatch = useDispatch();
  const scores = useSelector(selectScores);
  const status = useSelector(selectStatus);

  useEffect(() => {
    if (status === 'idle') dispatch(getScores());
  }, [status, dispatch]);

  return (
    <S.Board>
      {scores.map((scoreItem, i) => (
        <li key={i}>
          <ScoreItem user={scoreItem.user} score={scoreItem.score} rank={i} />
        </li>
      ))}
    </S.Board>
  );
};

export default ScoreDisplay;
