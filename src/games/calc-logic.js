import * as index from '../index.js';

const condition = () => {
  console.log('What is the result of the expression?');
};

const randomUserNumber = () => {
  const randomNumber1 = Math.floor(Math.random() * 101);
  const randomNumber2 = Math.floor(Math.random() * 101);
  return [randomNumber1, randomNumber2];
};

const questionUser = (randomNumber, i) => {
  const mathSign = ['+', '-', '*'];
  console.log(
    `Question: ${randomNumber[0]} ${mathSign[i]} ${randomNumber[1]}`,
  );
};

const calculatingResult = (i, randomNumbers) => {
  let result;
  if (i === 0) result = randomNumbers[0] + randomNumbers[1];
  else if (i === 1) result = randomNumbers[0] - randomNumbers[1];
  else result = randomNumbers[0] * randomNumbers[1];
  result = result.toString();
  return result;
};

const calcGame = () => {
  const name = index.greeting();
  condition();
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomUserNumber();
    questionUser(randomNumber, i);
    const answerUser = index.answerUser();
    const rightAns = calculatingResult(i, randomNumber);
    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }
  index.congratulations(name);
  return true;
};
export default calcGame;
