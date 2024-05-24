import readlineSync from "readline-sync";
const even = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log("Hello, " + name);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log("Question: " + randomNumber);
    const userAnswer = readlineSync.question("Your answer: ");
    let yesOrNo = 0;
    if (randomNumber % 2 === 0) yesOrNo = "yes";
    else yesOrNo = "no";
    if (userAnswer === yesOrNo) console.log("Correct!");
    else {
      console.log(
        userAnswer +
          " is wrong answer ;(. Correct answer was " +
          yesOrNo +
          ". Let`s try again " +
          name
      );
      break;
    }
    if (i === 2) console.log("Congratulations, " + name);
  }
};
export default even();
