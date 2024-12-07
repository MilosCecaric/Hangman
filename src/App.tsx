import React from 'react';
import { GameProvider } from './context/GameContext';
import { Game } from './components/Game';
import { GameModeSelection } from './components/GameModeSelection';
import { CustomWordInput } from './components/CustomWordInput';
import { useGame } from './context/GameContext';

const GameContent = () => {
  const { gameState } = useGame();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-8">Hangman</h1>
          
          {!gameState.gameMode && <GameModeSelection />}
          {gameState.gameMode === 'multiplayer' && !gameState.word && <CustomWordInput />}
          {((gameState.gameMode === 'single') || 
            (gameState.gameMode === 'multiplayer' && gameState.word)) && <Game />}
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;