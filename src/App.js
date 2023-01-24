import React from 'react';
import Game from './pages/Game';
import GlobalStyles from './components/GlobalStyles.js';
import { Route, Routes } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
};

export default App;
