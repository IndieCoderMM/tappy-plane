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
  background-size: 100% 100%;
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
  color: goldenrod;
  font-size: 1em;
  padding: 0.25rem;
`;

const Button = styled.button`
  background-color: yellow;
  padding: 1rem;
  border-radius: 5px;
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  box-shadow: 0 3px 3px rgba(130, 130, 130, 0.6);

  &:active {
    background-color: salmon;
    transform: translateY(2px) scaleY(0.9);
    box-shadow: 0 1px 3px rgba(130, 130, 130, 0.6);
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.color || 'transparent'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TitleText = styled.div`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 90%;
  height: 100px;
`;

const ScoreBoard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px #333;
  padding: 3rem 2rem;
  min-width: 60%;
  font-size: 1.5rem;
`;

const BoardDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  max-width: 548px;
  margin: 0 auto;
  gap: 1rem;
`;

const Heading = styled.h2`
  color: yellow;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
`;

const Board = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: #000;
  padding: 0.5rem;
  border-radius: 5px;
  box-shadow: inset 0 3px 14px rgba(30, 30, 130, 0.4);
  min-height: 250px;
  max-height: 400px;
  overflow-y: scroll;

  & li {
    padding: 0.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
`;

const Info = styled.p`
  text-align: center;
  color: ${(props) => props.color || 'white'};
`;

const S = {
  Game,
  Plane,
  TopPipe,
  BotPipe,
  Button,
  Ground,
  ScoreHeader,
  Screen,
  TitleText,
  ScoreBoard,
  Board,
  BoardDiv,
  Heading,
  BtnContainer,
  Info,
};

export default S;
