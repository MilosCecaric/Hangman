import React from 'react';
import { Keyboard } from './Keyboard';
import { Hangman } from './Hangman';
import { getMaskedWord } from '../utils/gameLogic';
import { useGame } from '../context/GameContext';

export const Game: React.FC = () => {
  const { gameState, handleGuess, resetGame } = useGame();
  const incorrectGuesses = 6 - gameState.remainingGuesses;

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <Hangman incorrectGuesses={incorrectGuesses} />
      </div>

      <div className="text-center">
        <p className="text-3xl font-mono tracking-wider mb-4">
          {getMaskedWord(gameState.word, gameState.guessedLetters)}
        </p>
        <p className="text-lg text-gray-600">
          Remaining Guesses: {gameState.remainingGuesses}
        </p>
      </div>

      {gameState.gameStatus !== 'playing' && (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">
            {gameState.gameStatus === 'won' 
              ? 'Congratulations! You won!' 
              : `Game Over! The word was ${gameState.word}`}
          </p>
          <button
            onClick={resetGame}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}

      <Keyboard
        onGuess={handleGuess}
        guessedLetters={gameState.guessedLetters}
        disabled={gameState.gameStatus !== 'playing'}
      />
    </div>
  );
};