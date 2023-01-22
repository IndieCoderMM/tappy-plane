import React from 'react';
import S from './Styled';
import ReadyText from '../assets/textGetReady.png';
import TapTick from '../assets/tapTick.png';

const StartScreen = ({ startGame }) => {
  return (
    <S.Screen onClick={() => startGame()}>
      <S.TitleText img={ReadyText} />
      <img src={TapTick} alt="tap to start" />
    </S.Screen>
  );
};

export default StartScreen;
