import React, { useState, useEffect } from 'react';
import S from '../components/Styled';
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const SIZE = 50;
const GRAVITY = 5;
const FORCE = 80;
const P_LENGTH = 200;
const P_GAP = 100;
const FPS = 30;

const Game = () => {
  const planeX = WIDTH / 2 - SIZE;
  const [planeY, setPlaneY] = useState(HEIGHT / 2);

  useEffect(() => {
    let timeId;
    if (planeY < HEIGHT - SIZE) {
      timeId = setInterval(() => {
        setPlaneY((planeY) => planeY + GRAVITY);
      }, FPS);
    }
    return () => clearInterval(timeId);
  }, [planeY]);

  const handleClick = () => {
    setPlaneY((planeY) => planeY - FORCE);
  };

  return (
    <>
      <S.Game w={WIDTH} h={HEIGHT} onClick={() => handleClick()}>
        <S.TopPipe x={300} w={50} bottom={HEIGHT - P_LENGTH} />
        <S.BotPipe top={HEIGHT - P_LENGTH - P_GAP} w={50} x={300} />
        <S.Plane x={planeX} y={planeY} size={SIZE} />
      </S.Game>
    </>
  );
};

export default Game;
