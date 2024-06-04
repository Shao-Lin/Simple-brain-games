Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.congratulations = exports.winOrLoseMassage = exports.answerUser = exports.greeting = void 0;

const _readlineSync = _interopRequireDefault(require('readline-sync'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = function greeting() {
  console.log('Welcome to the Brain Games!');

  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hello, ${name}`);
  return name;
};

exports.greeting = greeting;

const answerUser = function answerUser() {
  const userAnswer = _readlineSync.default.question('Your answer: ');

  return userAnswer;
};

exports.answerUser = answerUser;

const winOrLoseMassage = function winOrLoseMassage(userAnswer, rigthAnswer, name) {
  if (userAnswer === rigthAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rigthAnswer}. Let's try again, ${name}!`);
  return false;
};

exports.winOrLoseMassage = winOrLoseMassage;

const congratulations = function congratulations(name) {
  console.log(`Congratulations, ${name}!`);
};

exports.congratulations = congratulations;
