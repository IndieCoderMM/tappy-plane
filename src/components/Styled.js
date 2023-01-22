import styled from 'styled-components';
import PlaneRed from '../assets/planeRed1.png';
import BotRock from '../assets/rockSnow.png';
import TopRock from '../assets/rockSnowDown.png';
import bgImg from '../assets/background.png';

const Game = styled.div`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: skyblue;
  background-image: url(${bgImg});
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
`;

const Plane = styled.div.attrs((props) => ({
  style: {
    top: props.y + 'px',
  },
}))`
  position: absolute;
  left: ${(props) => props.x}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  /* background-color: yellow; */
  background-image: url(${PlaneRed});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
`;

const TopPipe = styled.div.attrs((props) => ({
  style: {
    left: props.x + 'px',
    bottom: props.bottom + 'px',
  },
}))`
  position: absolute;
  top: 0;
  width: ${(props) => props.w}px;
  /* background-color: green; */
  background-image: url(${TopRock});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top left;
`;

const BotPipe = styled.div.attrs((props) => ({
  style: {
    left: props.x + 'px',
    top: props.top + 'px',
  },
}))`
  position: absolute;
  bottom: 0;
  width: ${(props) => props.w}px;
  /* background-color: green; */
  background-image: url(${BotRock});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top left;
`;

const Ground = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: orange;
  border-top: solid 15px lightgreen;
`;

const ScoreHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: red;
  font-size: 2rem;
  padding: 0.25rem;
`;

const S = { Game, Plane, TopPipe, BotPipe, Ground, ScoreHeader };

export default S;
