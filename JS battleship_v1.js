var location1 = 3;
var location2 = 4;
var location3 = 5;


var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// GAME LOGIC//

while (isSunk == false) {
    guess = prompt("Ready!, Aim!, Fire! (enter 0=0) ");

    if(guess < 0 || guess > 6) {
        alert("Please Enter a Valid Cell Number!");
    }else {
        guesses = guesses + 1
        
        if(guess == location1 || guess == location2 || guess == location3) {
        hits = hits + 1;
        if(hits == 3) {
            isSunk = true;
            alert("You Sank my Battleship")
        }
    }else {
        alert("wise")
}
        }
}
var starts = "You Sank my Battleship at:" + " guesses " + "and you accuracy is: " + (3 / guesses);
alert(starts)