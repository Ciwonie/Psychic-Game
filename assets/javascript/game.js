// ![Psychic](Images/1-Psychic.jpg)

// 1. [Watch the demo](psychic-game-demo.mov).

// 2. You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

// 3. Guess what letter I'm thinking of

// 4. Wins: (# of times the user has guessed the letter correctly)

// 5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

// 6. Guesses Left: (# of guesses left. This will update)

// 7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

// 8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

// 9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


// An array of strings representing the alphabet.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Initial variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];

reset(); //create a reset function at bottom of page

// Initializing a function from a keypress. This begins the game.
document.addEventListener('keypress', function(event){

    var userGuess = event.key.toLowerCase();
    var computerGuess = Math.round(Math.random() * alphabet.length);

    if (alphabet.indexOf(userGuess) === -1) {
        return;
    }

    if (alphabet.indexOf(userGuess) === computerGuess) {
        wins++;
        reset();
    }

    else if (guessedLetters.indexOf(userGuess) == -1) {
        guessedLetters.push(userGuess);
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        reset();
    };

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses Left: " + guesses;


});

// Use reset function to avoid redundant code
function reset() {
    userGuess = []
    guessedLetters = [];
    guesses = 9;
    computerGuess = Math.round(Math.random() * alphabet.length);
};



