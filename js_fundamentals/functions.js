// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numberOfChildren, partnersName, location, jobTitle) {
    console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnersName + " with " + numberOfChildren + " kids.");
}

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function ageCalculator(birthYear) {
    var now = new Date;
    var currentYear = now.getFullYear();
    var possibleYear1 = currentYear - birthYear;
    var possibleYear2 = currentYear - birthYear - 1;
    console.log("You will be either " + possibleYear1 + " or " + possibleYear2);
}

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


function lifetimeSupplyCalculator(currentAge, consumptionPerDay) {
    var maxAge = 75;
    var totalRequirement = Math.round((maxAge - currentAge) * 365 * consumptionPerDay);
    console.log("You will need " + totalRequirement + " to last you until the ripe old age of " + maxAge);
}

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

function calcCircumference(radius) {
    var circumference = radius * 2 * Math.PI;
    console.log("The circumference is " + circumference);
}

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcArea(radius) {
    var area = Math.pow(radius, 2) * Math.PI;
    console.log("The area is " + area);
}

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

function celsiusToFahrenheit(celsius) {
    var fahrenheit = celsius * 1.8 + 32;
    console.log(celsius + "ºC is " + fahrenheit + "ºF");
}

// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) / 1.8;
    console.log(fahrenheit + "ºF is " + celsius + "ºC");
}