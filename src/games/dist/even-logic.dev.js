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
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const parityCheck = function parityCheck(randomNumber) {
  let rigthAnswer = 0;
  if (randomNumber % 2 === 0) rigthAnswer = 'yes';
  else rigthAnswer = 'no';
  return rigthAnswer;
};

const randomUserNumber = function randomUserNumber() {
  const randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
};

const questionUser = function questionUser(randomNumber) {
  console.log(`Question: ${randomNumber}`);
};

const evenGame = function evenGame() {
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

const _default = evenGame;
exports.default = _default;
