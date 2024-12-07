import { GameState } from '../types/hangman';

export const MAX_GUESSES = 6;

export const createInitialState = (word: string): Omit<GameState, 'gameMode'> => ({
  word: word ? word.toUpperCase() : '',
  guessedLetters: new Set(),
  remainingGuesses: MAX_GUESSES,
  gameStatus: word ? 'playing' : 'playing',
});

export const checkWin = (word: string, guessedLetters: Set<string>): boolean => {
  return word && [...word].every(letter => guessedLetters.has(letter));
};

export const getMaskedWord = (word: string, guessedLetters: Set<string>): string => {
  return word ? [...word].map(letter => guessedLetters.has(letter) ? letter : '_').join(' ') : '';
};