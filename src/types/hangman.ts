export type GameMode = 'single' | 'multiplayer' | null;

export interface GameState {
  word: string;
  guessedLetters: Set<string>;
  remainingGuesses: number;
  gameStatus: 'playing' | 'won' | 'lost';
  gameMode: GameMode;
}

export type GuessLetterFunction = (letter: string) => void;