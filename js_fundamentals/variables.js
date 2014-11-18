// Exercises: Variables

function fortuneTeller() {
// EXERCISE: The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

    var numberOfChildren = prompt("How many children do you have?");
    var partnersName = prompt("What's your partner name?");
    var location = prompt("What's your location?");
    var jobTitle = prompt("What's your job title?");
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
    console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnersName + " with " + numberOfChildren + " kids.");
}

function ageCalculator() {
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!
// Store the current year in a variable.
// Store their birth year in a variable.
    var birthYear = prompt("What's your birth year?");
    var now = new Date;
    var currentYear = now.getFullYear();
    var possibleYear1 = currentYear - birthYear;
    var possibleYear2 = currentYear - birthYear - 1;
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
    console.log("You will be either " + possibleYear1 + " or " + possibleYear2);
}

function lifetimeSupplyCalculator() {
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
    var currentAge = prompt("What's your current age?");
// Store a maximum age into a variable.
    var maxAge = 75;
// Store an estimated amount per day (as a number).
    var consumptionPerDay = prompt("How much do you eat each day?");
// Calculate how many you would eat total for the rest of your life.
    var totalRequirement = (maxAge - currentAge) * 365 * consumptionPerDay;
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
    console.log("You will need " + totalRequirement + " to last you until the ripe old age of " + maxAge);
}

function geometrizer() {
// EXERCISE: The Geometrizer
// Calculate properties of a circle, using the definitions here.
// Store a radius into a variable.
    var radius = prompt("Enter circle radius.");
// Calculate the circumference based on the radius, and output "The circumference is NN".
    var circumference = 2 * radius * Math.PI;
    console.log("The circumference is " + circumference);
// Calculate the area based on the radius, and output "The area is NN".
    var area = Math.pow(radius, 2) * Math.PI;
    console.log("The area is " + area);
}


function temperatureConverter() {
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.
// ºC =(ºF - 32) /  1.8000
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
    var celsiusTemp = 10;
    var cToF = celsiusTemp * 1.8 + 32;
    console.log(celsiusTemp + "º is " + cToF + "ºF");
// Now store a fahrenheit temperature into a variable.
    var fahrenTemp = 45;
// Convert it to celsius and output "NN°F is NN°C."
    var fToC = (fahrenTemp - 32) / 1.8;
    console.log(fahrenTemp + "º is " + fToC + "ºF");
}









