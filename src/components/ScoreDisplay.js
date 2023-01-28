import React from 'react';
import S from './Styled';
import ScoreItem from './ScoreItem';

const ScoreDisplay = ({ scores }) => {
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
