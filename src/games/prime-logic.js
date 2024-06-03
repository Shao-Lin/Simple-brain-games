import * as index from "../index.js";
const condition = () => {
    console.log(
        'Answer "yes" if given number is prime. Otherwise answer "no".'
    );
};

const primeCheck = (randomNumber) => {
    if (randomNumber <= 1) {
        return "no";
    }
    for (let i = 2; i <= Math.sqrt(randomNumber); i++) {
        if (randomNumber % i === 0) {
            return "no";
        }
    }
    return "yes";
};
const randomUserNumber = () => {
    let randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
};
const questionUser = (randomNumber) => {
    console.log("Question: " + randomNumber);
};

const primeGame = () => {
    let name = index.greeting();
    condition();
    for (let i = 0; i < 3; i++) {
        let randomNumber = randomUserNumber();
        questionUser(randomNumber);
        let answerUser = index.answerUser();
        let rightAns = primeCheck(randomNumber);
        if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
            return false;
        }
    }
    index.congratulations(name);
};
export default primeGame;
