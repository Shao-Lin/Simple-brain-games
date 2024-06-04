/* eslint-disable no-func-assign */

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj
                && typeof Symbol === 'function'
                && obj.constructor === Symbol
                && obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

const index = _interopRequireWildcard(require('../index.js'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  const cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null
        || (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  const cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  const newObj = {};
  const hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

const condition = function condition() {
  console.log('What is the result of the expression?');
};

const randomUserNumber = function randomUserNumber() {
  const randomNumber1 = Math.floor(Math.random() * 101);
  const randomNumber2 = Math.floor(Math.random() * 101);
  return [randomNumber1, randomNumber2];
};

const questionUser = function questionUser(randomNumber, i) {
  const mathSign = ['+', '-', '*'];
  console.log(
    `Question: ${
      randomNumber[0]
    } ${
      mathSign[i]
    } ${
      randomNumber[1]}`,
  );
};

const calculatingResult = function calculatingResult(i, randomNumbers) {
  let result;
  if (i === 0) result = randomNumbers[0] + randomNumbers[1];
  else if (i === 1) result = randomNumbers[0] - randomNumbers[1];
  else result = randomNumbers[0] * randomNumbers[1];
  result = result.toString();
  return result;
};

const calcGame = function calcGame() {
  const name = index.greeting();
  condition();

  for (let i = 0; i < 3; i++) {
    const randomNumber = randomUserNumber();
    questionUser(randomNumber, i);
    const answerUser = index.answerUser();
    const rightAns = calculatingResult(i, randomNumber);

    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }

  index.congratulations(name);
};

const _default = calcGame;
exports.default = _default;
