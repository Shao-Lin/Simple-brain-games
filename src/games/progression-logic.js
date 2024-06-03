import * as index from "../index.js";
const condition = () => {
    console.log("What number is missing in the progression?");
};
const funcArraySucession = () => {
    let numberArray = [];
    let lengthBetween = Math.floor(Math.random() * 11);
    let number = Math.floor(Math.random() * 101);
    for (let i = 0; i < 10; i++) {
        number = number + lengthBetween;
        numberArray.push(number);
    }
    return numberArray;
};
const funcRandomNumber = () => {
    let randomHiddenNumber = Math.floor(Math.random() * 10);
    return randomHiddenNumber;
};
const funcSuccessionWithHole = (array, randomNumber) => {
    array[randomNumber] = "..";
    return array;
};
const questionUser = (array) => {
    console.log(`Question: ${array.join(" ")}`);
};
const calculateHiddenNumber = (array, randomNumber) => {
    let answer = array[randomNumber];
    answer = answer.toString();
    return answer;
};

const progressionGame = () => {
    let name = index.greeting();
    condition();
    for (let i = 0; i < 3; i++) {
        let randomNumberChoiceHole = funcRandomNumber();
        let arraySucession = funcArraySucession();
        let rightAns = calculateHiddenNumber(
            arraySucession,
            randomNumberChoiceHole
        );

        let successionWithHole = funcSuccessionWithHole(
            arraySucession,
            randomNumberChoiceHole
        );
        questionUser(successionWithHole);
        let answerUser = index.answerUser();

        if (!index.winOrLoseMassage(answerUser, rightAns, name)) {
            return false;
        }
    }
    index.congratulations(name);
};
export default progressionGame;
