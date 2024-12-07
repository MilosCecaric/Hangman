import React from 'react';
import { GameMode } from '../types/hangman';
import { useGame } from '../context/GameContext';

export const GameModeSelection: React.FC = () => {
  const { startGame } = useGame();

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Choose Game Mode</h2>
      <div className="space-y-4">
        <button
          onClick={() => startGame('single')}
          className="w-64 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Play Alone
        </button>
        <button
          onClick={() => startGame('multiplayer')}
          className="w-64 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Play with Someone
        </button>
      </div>
    </div>
  );
};