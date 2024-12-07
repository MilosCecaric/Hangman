const words = [
  'REACT',
  'TYPESCRIPT',
  'JAVASCRIPT',
  'PROGRAMMING',
  'DEVELOPER',
  'COMPUTER',
  'SOFTWARE',
  'CODING',
  'INTERFACE',
  'COMPONENT',
];

export const getRandomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};