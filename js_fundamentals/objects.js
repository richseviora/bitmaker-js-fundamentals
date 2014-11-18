// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

function Recipe (title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
    this.log = function () {
        console.log(this.title);
        console.log("Serves: " + this.servings);
        console.log("Ingredients:");
        for (var i = 0; i < this.ingredients.length; i++) {
            console.log(this.ingredients[i]);
        }
    }
}

var newRecipe = new Recipe('Caesar',1,['Brutus','One Knife']);
newRecipe.log();

// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

function Book (title, author, alreadyRead) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
    this.describe = function () {
        if (this.alreadyRead) {
            console.log("You already read '" + this.title + "' by " + this.author);
        } else {
            console.log("You still need to read '" + this.title + "' by " + this.author);
        }
    }
}

var newBook = new Book('Lord of the Rings', 'JRR Tolkien', true);
var newBook1 = new Book('Whatever', 'Someone', false);
var bookArray = [newBook, newBook1];

for (var i = 0; i < bookArray.length; i++) {
    bookArray[i].describe();
}


// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

function Movie(title,duration,stars) {
    this.title = title;
    this.duration = duration;
    this.stars = stars;
    this.describe = function () {
        console.log (this.title + ' lasts for ' + this.duration + ' minutes. Stars: ' + stars.join(', ') + '.');
    }
}

var minorityReport = new Movie ('Minority Report', 120, ['Tom Cruise', 'Some Other People']);

minorityReport.describe();