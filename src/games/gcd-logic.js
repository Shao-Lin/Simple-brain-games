import * as index from '../index.js';

const condition = () => {
  console.log('Find the greatest common divisor of given numbers.');
};
const randomUserNumber = () => {
  const randomNumber1 = Math.floor(Math.random() * 101);
  const randomNumber2 = Math.floor(Math.random() * 101);
  return [randomNumber1, randomNumber2];
};
const questionUser = (randomNumber) => {
  console.log(`Question: ${randomNumber[0]} ${randomNumber[1]}`);
};
const calculateNod = (randomNumber) => {
  let randomNumber1 = randomNumber[0];
  let randomNumber2 = randomNumber[1];
  while (randomNumber2 !== 0) {
    const temp = randomNumber2;
    randomNumber2 = randomNumber1 % randomNumber2;
    randomNumber1 = temp;
    randomNumber1 = randomNumber1.toString();
  }
  return randomNumber1;
};

const gcdGame = () => {
  const name = index.greeting();
  condition();
  for (let i = 0; i < 3; i++) {
    const randomNumber = randomUserNumber();
    questionUser(randomNumber);
    const answerUser = index.answerUser();
    const rightAns = calculateNod(randomNumber);
    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }
  index.congratulations(name);
};
export default gcdGame;
