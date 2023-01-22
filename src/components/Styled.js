import styled from 'styled-components';

const Game = styled.div`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: skyblue;
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
  background-color: yellow;
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
  background-color: green;
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
  background-color: green;
`;

const Ground = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: brown;
`;

const ScoreHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 2rem;
  padding: 0.25rem;
`;

const S = { Game, Plane, TopPipe, BotPipe, Ground, ScoreHeader };

export default S;
