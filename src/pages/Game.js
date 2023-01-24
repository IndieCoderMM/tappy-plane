import React, { useState, useEffect } from 'react';
import S from '../components/Styled';
import GameOverScreen from '../components/GameOverScreen';
import StartScreen from '../components/StartScreen';
import { getHiScore, storeHiScore } from '../utils/storageManager';

const WIDTH = window.innerWidth > 548 ? 548 : window.innerWidth;
const HEIGHT = window.innerHeight;
const GND_LEVEL = 100;
const SIZE = 50;
const GRAVITY = 0.1;
const FORCE = -3;
const MAX_FORCE = -5;
const P_GAP = 200;
const P_WIDTH = 100;
const SPEEDX = 5;
const FPS = 20;
const PLANE_X = WIDTH / 2 - SIZE;

const isCollision = (planeY, pipeLen) => {
  return planeY + SIZE / 2 < pipeLen || planeY + SIZE / 2 > pipeLen + P_GAP;
};

const Game = () => {
  const [hiScore, setHiScore] = useState(getHiScore());
  const [started, setStarted] = useState(false);
  const [gameOver, setGameover] = useState(false);
  const [planeY, setPlaneY] = useState(HEIGHT / 2);
  const [planeV, setPlaneV] = useState(-2);
  const [pipeX, setPipeX] = useState(WIDTH);
  const [pipeLen, setPipeLen] = useState(200);
  const [passed, setPassed] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timeId;
    if (started) {
      if (!gameOver && planeY < HEIGHT - SIZE - GND_LEVEL) {
        timeId = setInterval(() => {
          setPlaneV((planeV) => planeV + GRAVITY);
          setPlaneY((planeY) => planeY + planeV);
        }, FPS);
      } else setGameover(true);
      return () => clearInterval(timeId);
    }
  }, [planeY, planeV, started, gameOver]);

  useEffect(() => {
    let timeId;

    if (started && !gameOver) {
      if (pipeX > -P_WIDTH) {
        timeId = setInterval(() => {
          setPipeX((pipeX) => pipeX - SPEEDX);
        }, FPS);
        return () => clearInterval(timeId);
      } else {
        setPipeX(WIDTH + P_WIDTH);
        setPipeLen(Math.random() * 100 + 100);
        setPassed(false);
      }
    }
  }, [pipeX, started, gameOver]);

  useEffect(() => {
    if (Math.abs(pipeX + P_WIDTH / 2 - PLANE_X) < SIZE) {
      if (isCollision(planeY, pipeLen)) {
        setGameover(true);
      }
    }
    if (PLANE_X > pipeX) {
      if (!passed) setPassed(true);
    }
  }, [pipeX, planeY, pipeLen, passed]);

  useEffect(() => {
    if (passed) setScore((score) => score + 1);
  }, [passed]);

  useEffect(() => {
    if (score > hiScore) setHiScore(score);
  }, [score, hiScore]);

  useEffect(() => {
    if (gameOver) storeHiScore(hiScore);
  }, [gameOver, hiScore]);

  const boostPlane = () => {
    if (!started || gameOver) return;
    setPlaneV((planeV) => {
      if (planeV < 0 && planeV > MAX_FORCE) return planeV - 1;
      return FORCE;
    });
  };

  const restart = () => {
    setScore(0);
    setGameover(false);
    setPlaneV(-2);
    setPlaneY(HEIGHT / 2);
    setPassed(false);
    setPipeX(WIDTH + P_WIDTH);
  };

  const startGame = () => {
    setStarted(true);
  };

  return (
    <>
      <S.Game w={WIDTH} h={HEIGHT} onClick={boostPlane}>
        {started ? null : <StartScreen startGame={startGame} />}
        <S.TopPipe x={pipeX} w={P_WIDTH} bottom={HEIGHT - pipeLen} />
        <S.BotPipe
          top={HEIGHT - (HEIGHT - pipeLen - P_GAP)}
          w={P_WIDTH}
          x={pipeX}
        />
        <S.Plane x={PLANE_X} y={planeY} size={SIZE} />
        <S.Ground top={HEIGHT - GND_LEVEL} />
        <S.ScoreHeader>
          <span>Score: {score}</span>
          <span>Best: {hiScore}</span>
        </S.ScoreHeader>
        {gameOver ? <GameOverScreen restart={restart} /> : null}
      </S.Game>
    </>
  );
};

export default Game;
