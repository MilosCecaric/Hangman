import React from 'react';

const HANGMAN_PARTS = [
  // Head
  <circle key="head" cx="50" cy="25" r="10" className="stroke-current fill-none" />,
  // Body
  <line key="body" x1="50" y1="35" x2="50" y2="70" className="stroke-current" />,
  // Left arm
  <line key="leftArm" x1="50" y1="50" x2="20" y2="40" className="stroke-current" />,
  // Right arm
  <line key="rightArm" x1="50" y1="50" x2="80" y2="40" className="stroke-current" />,
  // Left leg
  <line key="leftLeg" x1="50" y1="70" x2="20" y2="90" className="stroke-current" />,
  // Right leg
  <line key="rightLeg" x1="50" y1="70" x2="80" y2="90" className="stroke-current" />,
];

interface HangmanProps {
  incorrectGuesses: number;
}

export const Hangman: React.FC<HangmanProps> = ({ incorrectGuesses }) => {
  return (
    <svg width="100" height="100" className="stroke-2">
      {/* Gallows */}
      <line x1="10" y1="95" x2="90" y2="95" className="stroke-current" />
      <line x1="30" y1="95" x2="30" y2="5" className="stroke-current" />
      <line x1="30" y1="5" x2="50" y2="5" className="stroke-current" />
      <line x1="50" y1="5" x2="50" y2="15" className="stroke-current" />
      
      {/* Draw hangman parts based on incorrect guesses */}
      {HANGMAN_PARTS.slice(0, incorrectGuesses)}
    </svg>
  );
};