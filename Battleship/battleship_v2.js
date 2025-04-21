// declaring variable
var randomLoc = Math.floor(Math.random() * 5);

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// Game logic

while (isSunk == false) {
    guess = prompt("Ready! Aim, Fire! (enter number 0-6)");

    if (guess == null) {
        alert("thank you for playing!");
        break;
    }
    
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    } else {
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits += 1;
            alert("Hit!")

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship! 🚢")
            }
        } else {
            alert("Miss!")
        }
    }
}

var accuracy = (guesses > 0 ? (hits / guess) * 100 : 0).toFixed(5);
var stats = "You took" + guesses + "guesses to sink the battleship! " + "\n" + "Accuracy: " + accuracy + "%";
alert(stats);