import * as index from "../index.js";

const condition = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const parityCheck = (randomNumber) => {
    let rigthAnswer = 0;
    if (randomNumber % 2 === 0) rigthAnswer = "yes";
    else rigthAnswer = "no";
    return rigthAnswer;
};
const randomUserNumber = () => {
    let randomNumber = Math.floor(Math.random() * 101);
    return randomNumber;
};
const questionUser = (randomNumber) => {
    console.log("Question: " + randomNumber);
};

const evenGame = () => {
    let name = index.greeting();
    condition();
    for (let i = 0; i < 3; i++) {
        let randomNumber = randomUserNumber();
        questionUser(randomNumber);
        let answerUser = index.answerUser();
        let yesOrNo = parityCheck(randomNumber);
        if (!index.winOrLoseMassage(answerUser, yesOrNo, name)) {
            return false;
        }
    }
    index.congratulations(name);
};
export default evenGame;
