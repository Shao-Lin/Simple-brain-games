import * as index from '../index.js';

const condition = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const parityCheck = (randomNumber) => {
  let rigthAnswer = 0;
  if (randomNumber % 2 === 0) rigthAnswer = 'yes';
  else rigthAnswer = 'no';
  return rigthAnswer;
};
const randomUserNumber = () => {
  const randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
};
const questionUser = (randomNumber) => {
  console.log(`Question: ${randomNumber}`);
};

const evenGame = () => {
  const name = index.greeting();
  condition();
  for (let i = 0; i < 3; i++) {
    const randomNumber = randomUserNumber();
    questionUser(randomNumber);
    const answerUser = index.answerUser();
    const rightAns = parityCheck(randomNumber);
    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }
  index.congratulations(name);
};
export default evenGame;
