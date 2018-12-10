var pcAnswer = ["w", "i", "n", "t", "e", "r"];
var wins = 0;
var losses = 0;
var GuessLeft = 10;
var GuessIndex = 0;
var historyX = [];
//store the variables
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var GuessleftText = document.getElementById("guessleft-text");
//reset funtion
function reset() {
    GuessLeft = 10;
    wins = 0;
    losses = 0;

}
function PushArr(userGuess) {
    historyX.push(userGuess);
    console.log(historyX);
}
//start 
document.onkeyup = function (event) {
    var userGuess = event.key;
    PushArr(userGuess.toString());



    // check if user have won the game
    if (wins == pcAnswer.length) {
        alert("YOU WIN!!!");
        reset();
    }
    // keep playing
    else {
        
            if (GuessIndex <= GuessLeft - 1) {
                if ((userGuess === "w") || (userGuess === "i") || (userGuess === "n") || (userGuess === "t") || (userGuess === "e") || (userGuess === "r")) {
                    wins++;
                }
                else {
                    losses++; GuessLeft--;
                }

                directionsText.textContent = "";
                winsText.textContent = "wins: " + wins;
                lossesText.textContent = "losses: " + losses;
                GuessleftText.textContent = "Guesses Left :" + GuessLeft;
                userGuessText.textContent = "You chose so far: " + historyX;
            }
            else {
                reset();
            }
        
    }
}
