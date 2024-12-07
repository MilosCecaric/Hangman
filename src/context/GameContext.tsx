import React, { createContext, useContext, useState, useCallback } from 'react';
import { GameState, GameMode } from '../types/hangman';
import { getRandomWord } from '../utils/words';
import { createInitialState, checkWin, MAX_GUESSES } from '../utils/gameLogic';

interface GameContextType {
  gameState: GameState;
  handleGuess: (letter: string) => void;
  startGame: (mode: GameMode, customWord?: string) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

const DEFAULT_STATE: GameState = {
  word: '',
  guessedLetters: new Set(),
  remainingGuesses: MAX_GUESSES,
  gameStatus: 'playing',
  gameMode: null,
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameState, setGameState] = useState<GameState>(DEFAULT_STATE);

  const handleGuess = useCallback((letter: string) => {
    if (gameState.gameStatus !== 'playing') return;

    setGameState(currentState => {
      const newGuessedLetters = new Set(currentState.guessedLetters).add(letter);
      const isCorrectGuess = currentState.word.includes(letter);
      const newRemainingGuesses = isCorrectGuess 
        ? currentState.remainingGuesses 
        : currentState.remainingGuesses - 1;
      
      const won = checkWin(currentState.word, newGuessedLetters);
      const lost = newRemainingGuesses === 0;

      return {
        ...currentState,
        guessedLetters: newGuessedLetters,
        remainingGuesses: newRemainingGuesses,
        gameStatus: won ? 'won' : lost ? 'lost' : 'playing',
      };
    });
  }, [gameState.gameStatus]);

  const startGame = (mode: GameMode, customWord?: string) => {
    const word = mode === 'multiplayer' ? customWord! : getRandomWord();
    setGameState({
      ...createInitialState(word),
      gameMode: mode,
    });
  };

  const resetGame = () => {
    setGameState(DEFAULT_STATE);
  };

  return (
    <GameContext.Provider value={{ gameState, handleGuess, startGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};