// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?
var numberOfChildren = prompt("How many children do you have?");
var partnersName = prompt("What's your partner name?");
var location = prompt("What's your location?");
var jobTitle = prompt("What's your job title?");
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnersName + " with " + numberOfChildren + " kids.");

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!
// Store the current year in a variable.
// Store their birth year in a variable.
var birthYear = prompt("What's your birth year?");
var currentYear = Date.new.getFullYear();
var possibleYear1 = birthYear - currentYear;
var possibleYear2 = birthYear - currentYear - 1;
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
console.log("You will be either " + possibleYear1 + " or " + possibleYear2);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


