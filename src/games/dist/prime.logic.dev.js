"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var index = _interopRequireWildcard(require("../index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var condition = function condition() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

var primeCheck = function primeCheck(randomNumber) {
  if (randomNumber <= 1) {
    return "no";
  }

  for (var i = 2; i <= Math.sqrt(randomNumber); i++) {
    if (randomNumber % i === 0) {
      return "no";
    }
  }

  return "yes";
};

var randomUserNumber = function randomUserNumber() {
  var randomNumber = Math.floor(Math.random() * 101);
  return randomNumber;
};

var questionUser = function questionUser(randomNumber) {
  console.log("Question: " + randomNumber);
};

var primeGame = function primeGame() {
  var name = index.greeting();
  condition();

  for (var i = 0; i < 3; i++) {
    var randomNumber = randomUserNumber();
    questionUser(randomNumber);
    var answerUser = index.answerUser();
    var rightAns = primeCheck(randomNumber);

    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }

  index.congratulations(name);
};

var _default = primeGame;
exports["default"] = _default;