"use strict";
/* eslint-disable no-func-assign */
function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports["default"] = void 0;

var index = _interopRequireWildcard(require("../index.js"));

function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
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
        obj === null ||
        (_typeof(obj) !== "object" && typeof obj !== "function")
    ) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj["default"] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

var condition = function condition() {
    console.log("Find the greatest common divisor of given numbers.");
};

var randomUserNumber = function randomUserNumber() {
    var randomNumber1 = Math.floor(Math.random() * 101);
    var randomNumber2 = Math.floor(Math.random() * 101);
    return [randomNumber1, randomNumber2];
};

var questionUser = function questionUser(randomNumber) {
    console.log("Question: " + randomNumber[0] + " " + randomNumber[1]);
};

var calculateNod = function calculateNod(randomNumber) {
    var randomNumber1 = randomNumber[0];
    var randomNumber2 = randomNumber[1];

    while (randomNumber2 !== 0) {
        var temp = randomNumber2;
        randomNumber2 = randomNumber1 % randomNumber2;
        randomNumber1 = temp;
        randomNumber1 = randomNumber1.toString();
    }

    return randomNumber1;
};

var gcdGame = function gcdGame() {
    var name = index.greeting();
    condition();

    for (var i = 0; i < 3; i++) {
        var randomNumber = randomUserNumber();
        questionUser(randomNumber);
        var answerUser = index.answerUser();
        var rightAns = calculateNod(randomNumber);

        if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
            return false;
        }
    }

    index.congratulations(name);
};

var _default = gcdGame;
exports["default"] = _default;
