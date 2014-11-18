// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(value1, value2) {
    return Math.max(value1, value2);
}

console.log("The greater of 5 and 10 is " + greaterNum(5, 10));
console.log("The greater of 100 and 10 is " + greaterNum(100, 10));

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(languageCode) {
    switch (languageCode) {
        case 'de':
            return 'Guten tag!';
        case 'es':
            return 'Spanish Hello!';
        default:
            return 'Hello World!';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('de'));

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(number_score) {
    if (number_score >= 90) {
        return 'A';
    } else if (number_score >= 80) {
        return 'B';
    } else if (number_score >= 70) {
        return 'C';
    } else if (number_score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(assignGrade(99));
console.log(assignGrade(32));
console.log(assignGrade(65));

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number) {
    var newNoun = '';
    if (number == 1) {
        newNoun = noun;
    } else {

        switch (noun) {
            case 'geese':
            case 'sheep':
                newNoun = noun;
                break;
            default:
                newNoun = noun + 's';
                break;
        }
    }
    return number + ' ' + newNoun;
}


console.log(pluralize('dog',5));
console.log(pluralize('cat',1));
console.log(pluralize('geese',3));