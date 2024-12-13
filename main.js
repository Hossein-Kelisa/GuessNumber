let randomNumber = Math.floor(Math.random() * 10)+1;

let userGuess = prompt('Guess a number between 1 and 10:');
userGuess = Number(userGuess);

while (userGuess !== randomNumber) {
    if ( userGuess < randomNumber ) {
        alert('Oops! You should go up.');
    } else if (userGuess > randomNumber) {
        alert('Oops! You should go down.');
    }
    userGuess = Number(prompt('Try again'));
}
alert('Congratulations! You guessed the correct number ;)');   
