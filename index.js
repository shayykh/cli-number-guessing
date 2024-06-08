import inquirer from "inquirer";
console.log("***Welcome to the guessing game!***\n\n");
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "guessNumber",
        message: "Guess a number between 1 and 5: ",
    }
]);
let randomNumber = Math.floor(Math.random() * 5) + 1;
if (answers.guessNumber === randomNumber) {
    console.log("You guessed the right number!");
}
else {
    console.log(`You guessed the wrong number! The correct number was ${randomNumber}`);
}
