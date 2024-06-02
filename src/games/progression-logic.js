import * as index from "../index.js";
const condition = () => {
    console.log("What number is missing in the progression?");
};
const randomUserNumber = () => {
    let numberArray = [];
    let lengthBetween = Math.floor(Math.random() * 11);
    let number = Math.floor(Math.random() * 101);
    for (let i = 0; i < 10; i++) {
        number = number + lengthBetween;
        numberArray.push(number);
    }
    let randomHiddenNumber = Math.floor(Math.random() * 10);
    numberArray[randomHiddenNumber] = "..";
    return numberArray;
};
const questionUser = (randomNumber) => {
    console.log("Question: " + randomNumber);
};
const calculateHiddenNumber = (arrayRandomNumbers) => {
    let answer;
    for (let i = 0; i < 2; i++) {
        if (
            arrayRandomNumbers[i] !== ".." &&
            arrayRandomNumbers[i + 2] !== ".."
        ) {
            answer = (arrayRandomNumbers[i + 2] - arrayRandomNumbers[i]) / 2;
        }
    }
    answer = answer.toString();
    return answer;
};

const progressionGame = () => {
    let name = index.greeting();
    condition();
    for (let i = 0; i < 3; i++) {
        let randomNumber = randomUserNumber();
        questionUser(randomNumber);
        let answerUser = index.answerUser();
        let rightAns = calculateHiddenNumber(randomNumber);
        if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
            return false;
        }
    }
    index.congratulations(name);
};
export default progressionGame;
