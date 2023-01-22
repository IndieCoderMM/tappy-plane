import React, { useState, useEffect } from 'react';
import S from '../components/Styled';
import GameOverScreen from '../components/GameOverScreen';
import StartScreen from '../components/StartScreen';

const WIDTH = window.innerWidth > 548 ? 548 : window.innerWidth;
const HEIGHT = window.innerHeight;
const GND_LEVEL = 100;
const SIZE = 50;
const GRAVITY = 3.5;
const FORCE = 50;
const P_GAP = 200;
const P_WIDTH = 100;
const SPEED = 5;
const FPS = 20;

const STORAGE_KEY = 'TPY_PLANE_HISCORE';

const isCollision = (planeY, pipeLen) => {
  return planeY - SIZE / 2 < pipeLen || planeY + SIZE / 2 > pipeLen + P_GAP;
};

const getHiScore = () => {
  return localStorage.getItem(STORAGE_KEY) || 0;
};

const storeHiScore = (score) => localStorage.setItem(STORAGE_KEY, score);

const Game = () => {
  const planeX = WIDTH / 2 - SIZE;
  const [hiScore, setHiScore] = useState(getHiScore());
  const [started, setStarted] = useState(false);
  const [gameOver, setGameover] = useState(false);
  const [planeY, setPlaneY] = useState(HEIGHT / 2);
  const [pipeX, setPipeX] = useState(WIDTH);
  const [pipeLen, setPipeLen] = useState(200);
  const [passed, setPassed] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let timeId;
    if (started) {
      if (!gameOver && planeY < HEIGHT - SIZE - GND_LEVEL) {
        timeId = setInterval(() => {
          setPlaneY((planeY) => planeY + GRAVITY);
        }, FPS);
      } else setGameover(true);
      return () => clearInterval(timeId);
    }
  }, [planeY, started, gameOver]);

  useEffect(() => {
    let timeId;

    if (started && !gameOver) {
      if (pipeX > -P_WIDTH) {
        timeId = setInterval(() => {
          setPipeX((pipeX) => pipeX - SPEED);
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
    if (Math.abs(pipeX + P_WIDTH / 2 - planeX) < SIZE) {
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
    if (!started || gameOver) return;
    setPlaneY((planeY) => planeY - FORCE);
  };

  const restart = () => {
    setGameover(false);
    setScore(0);
    setPipeX(WIDTH + P_WIDTH);
    setPlaneY(HEIGHT / 2);
    setPassed(false);
  };

  const startGame = () => {
    setStarted(true);
  };

  return (
    <>
      <S.Game w={WIDTH} h={HEIGHT} onClick={() => handleClick()}>
        {started ? null : <StartScreen startGame={startGame} />}
        <S.TopPipe x={pipeX} w={P_WIDTH} bottom={HEIGHT - pipeLen} />
        <S.BotPipe
          top={HEIGHT - (HEIGHT - pipeLen - P_GAP)}
          w={P_WIDTH}
          x={pipeX}
        />
        <S.Plane x={planeX} y={planeY} size={SIZE} />
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
