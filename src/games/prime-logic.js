import * as index from '../index.js';

const condition = () => {
  console.log(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
  );
};

const primeCheck = (randomNumber) => {
  if (randomNumber <= 1) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(randomNumber); i += 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const randomUserNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
};
const questionUser = (randomNumber) => {
  console.log(`Question: ${randomNumber}`);
};

const primeGame = () => {
  const name = index.greeting();
  condition();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomUserNumber();
    questionUser(randomNumber);
    const answerUser = index.answerUser();
    const rightAns = primeCheck(randomNumber);
    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }
  index.congratulations(name);
  return true;
};
export default primeGame;
