// Generate a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Select elements
const userGuessInput = document.getElementById('userGuess');
const submitButton = document.getElementById('submitGuess');
const messageDisplay = document.getElementById('message');
const guessCountDisplay = document.getElementById('guessCount');

// Initialize the guess counter
let attempts = 0;

// Add event listener to the button
submitButton.addEventListener('click', () => {
    const userGuess = Number(userGuessInput.value); // Get the user's guess

    // Check if the input is valid
    if (!userGuess || userGuess < 1 || userGuess > 10) {
        messageDisplay.textContent = 'Please enter a valid number between 1 and 10.';
        return;
    }

     // Increment and display the guess counter
     attempts++;
     guessCountDisplay.textContent = attempts;

    // Check the guess
    if (userGuess < randomNumber) {
        messageDisplay.textContent = 'Oops! You should go up.';
    } else if (userGuess > randomNumber) {
        messageDisplay.textContent = 'Oops! You should go down.';
    } else {
        messageDisplay.textContent = 'Congratulations! You guessed the correct number 😉';
        // Disable input and button after a correct guess
        userGuessInput.disabled = true;
        submitButton.disabled = true;
    }

    // Clear the input field for the next guess
    userGuessInput.value = '';
});
