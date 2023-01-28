import React from 'react';

const ScoreItem = ({ user, score, rank }) => {
  return (
    <>
      <span>{`${rank + 1}. ${user}`}</span>
      <span>{rank === 0 ? '👑' : null}</span>
      <span>{score}</span>
    </>
  );
};

export default ScoreItem;
