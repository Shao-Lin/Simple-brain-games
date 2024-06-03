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
  console.log("What number is missing in the progression?");
};

var funcArraySucession = function funcArraySucession() {
  var numberArray = [];
  var lengthBetween = Math.floor(Math.random() * 11);
  var number = Math.floor(Math.random() * 101);

  for (var i = 0; i < 10; i++) {
    number = number + lengthBetween;
    numberArray.push(number);
  }

  return numberArray;
};

var funcRandomNumber = function funcRandomNumber() {
  var randomHiddenNumber = Math.floor(Math.random() * 10);
  return randomHiddenNumber;
};

var funcSuccessionWithHole = function funcSuccessionWithHole(array, randomNumber) {
  array[randomNumber] = "..";
  return array;
};

var questionUser = function questionUser(array) {
  console.log("Question: ".concat(array.join(" ")));
};

var calculateHiddenNumber = function calculateHiddenNumber(array, randomNumber) {
  var answer = array[randomNumber];
  answer = answer.toString();
  return answer;
};

var progressionGame = function progressionGame() {
  var name = index.greeting();
  condition();

  for (var i = 0; i < 3; i++) {
    var randomNumberChoiceHole = funcRandomNumber();
    var arraySucession = funcArraySucession();
    var rightAns = calculateHiddenNumber(arraySucession, randomNumberChoiceHole);
    var successionWithHole = funcSuccessionWithHole(arraySucession, randomNumberChoiceHole);
    questionUser(successionWithHole);
    var answerUser = index.answerUser();

    if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
      return false;
    }
  }

  index.congratulations(name);
};

var _default = progressionGame;
exports["default"] = _default;