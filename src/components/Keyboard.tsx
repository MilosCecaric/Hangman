import React from 'react';

interface KeyboardProps {
  onGuess: (letter: string) => void;
  guessedLetters: Set<string>;
  disabled: boolean;
}

export const Keyboard: React.FC<KeyboardProps> = ({ onGuess, guessedLetters, disabled }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="grid grid-cols-7 gap-2 max-w-xl mx-auto">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={disabled || guessedLetters.has(letter)}
          className={`
            p-2 text-lg font-bold rounded-lg transition-colors
            ${
              guessedLetters.has(letter)
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};