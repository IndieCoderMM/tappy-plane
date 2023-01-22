import styled from 'styled-components';

const Game = styled.div`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: skyblue;
  position: relative;
`;

const Plane = styled.div`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: red;
`;

const TopPipe = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.x}px;
  bottom: ${(props) => props.bottom}px;
  width: ${(props) => props.w}px;
  background-color: green;
`;

const BotPipe = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props) => props.x}px;
  top: ${(props) => props.top}px;
  width: ${(props) => props.w}px;
  background-color: green;
`;

const S = { Game, Plane, TopPipe, BotPipe };

export default S;
