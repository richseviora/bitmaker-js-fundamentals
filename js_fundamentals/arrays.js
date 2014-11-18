// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var array = ['cats','dogs','birds','fish'];

function ordinalize(number) {
    var i = number % 10;
    var j = number % 100;
    if (i == 1 && j != 11) {
        return number + 'st';
    } else if (i == 2 && j != 12) {
        return number + 'nd';
    } else if (i == 3 && j != 13) {
        return number + 'rd';
    } else {
        return number + 'th';
    }
}

for (var i = 0; i < array.length; i++) {
    console.log ('My ' + ordinalize(i + 1) + ' choice is ' + array[i]);
}