import readlineSync from "readline-sync";

export const greeting = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log("Hello, " + name);
    return name;
};

export const answerUser = () => {
    const userAnswer = readlineSync.question("Your answer: ");
    return userAnswer;
};

export const winOrLoseMassage = (userAnswer, rigthAnswer, name) => {
    if (userAnswer === rigthAnswer) {
        console.log("Correct!");
        return true;
    } else {
        console.log(
            userAnswer +
                " is wrong answer ;(. Correct answer was " +
                rigthAnswer +
                ". Let`s try again, " +
                name +
                "!"
        );
        return false;
    }
};

export const congratulations = (name) => {
    console.log("Congratulations, " + name + "!");
};
