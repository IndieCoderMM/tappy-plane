import React, { useState, useEffect } from 'react';
import S from '../components/Styled';
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
const GND_LEVEL = 100;
const SIZE = 50;
const GRAVITY = 5;
const FORCE = 80;
const P_GAP = 200;
const P_WIDTH = 100;
const SPEED = 5;
const FPS = 20;

const isCollision = (planeY, pipeLen) => {
  if (planeY < pipeLen || planeY + SIZE > pipeLen + P_GAP) {
    return true;
  }
  return false;
};

const STORAGE_KEY = 'TPY_PLANE_HISCORE';

const getHiScore = () => {
  return localStorage.getItem(STORAGE_KEY) || 0;
};

const storeHiScore = (score) => localStorage.setItem(STORAGE_KEY, score);

const Game = () => {
  const planeX = WIDTH / 2 - SIZE;
  const [passed, setPassed] = useState(false);
  const [hiScore, setHiScore] = useState(getHiScore());
  const [gameOver, setGameover] = useState(false);
  const [planeY, setPlaneY] = useState(HEIGHT / 2);
  const [pipeX, setPipeX] = useState(WIDTH);
  const [pipeLen, setPipeLen] = useState(200);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timeId;
    if (!gameOver && planeY < HEIGHT - SIZE - GND_LEVEL) {
      timeId = setInterval(() => {
        setPlaneY((planeY) => planeY + GRAVITY);
      }, FPS);
    } else setGameover(true);
    return () => clearInterval(timeId);
  }, [planeY, gameOver]);

  useEffect(() => {
    let timeId;

    if (!gameOver) {
      if (pipeX > -P_WIDTH) {
        timeId = setInterval(() => {
          setPipeX((pipeX) => pipeX - SPEED);
        }, FPS);
        return () => clearInterval(timeId);
      } else {
        setPipeX(WIDTH + P_WIDTH);
        setPipeLen(Math.random() * 200 + 50);
        setPassed(false);
      }
    }
  }, [pipeX, gameOver]);

  useEffect(() => {
    if (Math.abs(pipeX - planeX) < SIZE) {
      if (isCollision(planeY, pipeLen)) {
        setGameover(true);
      }
    }
    if (planeX > pipeX) {
      if (!passed) setPassed(true);
    }
  }, [pipeX, planeX, planeY, pipeLen, passed]);

  useEffect(() => {
    if (passed) setScore((score) => score + 1);
  }, [passed]);

  useEffect(() => {
    if (score > hiScore) setHiScore(score);
  }, [score, hiScore]);

  useEffect(() => {
    if (gameOver) storeHiScore(hiScore);
  }, [gameOver, hiScore]);

  const handleClick = () => {
    if (gameOver) return;
    setPlaneY((planeY) => planeY - FORCE);
  };

  return (
    <>
      <S.Game w={WIDTH} h={HEIGHT} onClick={() => handleClick()}>
        <S.ScoreHeader>
          <span>Score: {score}</span>
          <span>Best: {hiScore}</span>
        </S.ScoreHeader>
        <S.TopPipe x={pipeX} w={P_WIDTH} bottom={HEIGHT - pipeLen} />
        <S.BotPipe
          top={HEIGHT - (HEIGHT - pipeLen - P_GAP)}
          w={P_WIDTH}
          x={pipeX}
        />
        <S.Plane x={planeX} y={planeY} size={SIZE} />
        <S.Ground top={HEIGHT - GND_LEVEL} />
      </S.Game>
    </>
  );
};

export default Game;
