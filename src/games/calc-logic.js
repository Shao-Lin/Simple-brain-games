import * as index from "../index.js";

const condition = () => {
    console.log("What is the result of the expression?");
};

const randomUserNumber = () => {
    let randomNumber1 = Math.floor(Math.random() * 101);
    let randomNumber2 = Math.floor(Math.random() * 101);
    return [randomNumber1, randomNumber2];
};

const questionUser = (randomNumber, i) => {
    const mathSign = ["+", "-", "*"];
    console.log(
        "Question: " +
            randomNumber[0] +
            " " +
            mathSign[i] +
            " " +
            randomNumber[1]
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
    let name = index.greeting();
    condition();
    for (let i = 0; i < 3; i++) {
        let randomNumber = randomUserNumber();
        questionUser(randomNumber, i);
        let answerUser = index.answerUser();
        let rightAns = calculatingResult(i, randomNumber);
        if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
            return false;
        }
    }
    index.congratulations(name);
};
export default calcGame;
