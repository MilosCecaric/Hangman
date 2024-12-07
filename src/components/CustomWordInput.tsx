import React, { useState } from 'react';
import { useGame } from '../context/GameContext';

export const CustomWordInput: React.FC = () => {
  const [customWord, setCustomWord] = useState('');
  const { startGame } = useGame();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customWord.trim()) {
      startGame('multiplayer', customWord.trim());
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Enter a Word for Your Friend to Guess</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          value={customWord}
          onChange={(e) => setCustomWord(e.target.value.toUpperCase())}
          className="w-64 p-3 border rounded-lg"
          placeholder="Enter a word..."
          pattern="[A-Za-z]+"
          required
        />
        <div>
          <button
            type="submit"
            className="w-64 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Start Game
          </button>
        </div>
      </form>
    </div>
  );
};