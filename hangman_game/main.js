// Letters
const letters = 'abcdefghijklmnopqrstuvwxyz';

// Get array friom letters
let lettersArray = Array.from(letters);

// Select letters container
let lettersContainer = document.querySelector('.letters');

// Generate letters
lettersArray.forEach(letter => {
     // Create span
     let span = document.createElement(('span'));

     // Create letter text node
     let theLetter = document.createTextNode(letter);

     // Append the letter to span
     span.appendChild(theLetter);

     // Add class on span
     span.className = 'letter-box';

     // Append span to the letters container
     lettersContainer.appendChild(span);

});

// TODO: instead of putting words like this, import them as JSON file
// Object of words + categories
const words = {
    programming: ["JavaScript", "Python", "Java", "Ruby", "Swift", "Kotlin", "Haskell", "Erlang", "Scala", "Rust"],
    movies: ["Inception", "Titanic", "The Matrix", "Avatar", "Frozen", "Fight Club", "The Godfather", "Rocky", "Braveheart", "Vertigo"],
    people: ["Albert Einstein", "Isaac Newton", "Elon Musk", "Beethoven", "Galileo", "Cleopatra", "Shakespeare", "Mahatma Gandhi", "Mandela", "Tesla"],
    countries: ["France", "Germany", "Japan", "Canada", "Brazil", "Australia", "South Africa", "China", "Egypt", "Italy"]
};

// Get random property
let allKeys = Object.keys(words);

// Random number depends on keys' length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category
let randomPropName = allKeys[randomPropNumber];

// Category words
let randomPropValue = words[randomPropName];

// Random number depends on words' count
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The chosen word
let randomValueValue = randomPropValue[randomValueNumber];

// Set category info
document.querySelector('.game-info .category span').innerHTML = randomPropName;

// Select letters guess element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert chosen word to array
let lettersAndSpace = Array.from(randomValueValue);

// Create spans depending on letters
lettersAndSpace.forEach(letter => {
    
    // Create empty span
    let emptySpan = document.createElement('span');

    // If letter is space
    if (letter === ' '){

        // Add class to the span
        emptySpan.className = 'has-space';
    }

    // Append spans to Letter Guess Container
    lettersGuessContainer.appendChild(emptySpan);   

});

// Select guess spans
let guessSpans = document.querySelectorAll('.letters-guess span');

// Set wrong attempts
let wrongAttempts = 0;

// Set correct attempts
let correctAttempts = 0;

// Select the draw element
let theDraw = document.querySelector('.hangman-draw');

// Handle clicking on letters
document.addEventListener('click', (e) => {

    // Set the choose status
    let theStatus = false;
    
    if(e.target.className === 'letter-box') {
        
        e.target.classList.add(("clicked"));

        // Get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // The chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        

        theChosenWord.forEach((wordLetter, wordIndex) => {

            //if the clicked letter is equal to one of the chosec word letters
            if(wordLetter.toLowerCase() === theClickedLetter){

                // Set status to true
                theStatus = true;

                // Loop on all guess spans
                guessSpans.forEach((span, spanIndex) => {

                    if (wordIndex === spanIndex){

                        span.innerHTML = theClickedLetter;

                    }

                });

            }

        });

        let theChosenWordWithoutSpaces = removeSpaces(theChosenWord);


        let theChosenWordWithoutSpacesUnique = removeDuplicates(theChosenWordWithoutSpaces);

        // If the letter is wrong
        if (theStatus !== true) {

            // Increase the wrong attempts counter
            wrongAttempts++;

            // Add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // Play fail sound
            document.getElementById('fail').play();

            if (wrongAttempts === 8) {

                loseGame();

                lettersContainer.classList.add('finished');

            }

        } else {

            // Increase the wrong attempts counter
            correctAttempts++;

            // Play success sound
            document.getElementById('success').play();

            if (correctAttempts === (theChosenWordWithoutSpacesUnique.length)) {

                if (wrongAttempts < 3) {
                    console.log('excellent');
                    winGame('excellent');
                } else if ((wrongAttempts >= 3) && (wrongAttempts < 6)) {
                    console.log();
                    winGame('good');
                } else {
                    console.log();
                    winGame('not bad');
                }

                lettersContainer.classList.add('finished');

            }
        }

    }

});

// End game function
function loseGame() {

    // Create lose popup div
    let div = document.createElement('div');

    // Create text
    let divText = document.createTextNode(`Game Over, the word is: ${randomValueValue}`);

    // Append text to div
    div.appendChild(divText);

    // Add class to div
    div.className = 'popupLose';

    // Append div to body
    document.body.appendChild(div);
}

function winGame(score) {

    let div = document.createElement('div');
    let winMessage = '';

    if (score === 'excellent') {
        winMessage = 'Excellent, You Won!';
    } else if (score === 'good') {
        winMessage = 'Good, You Won!';
    } else {
        winMessage = 'Not Bad, You Won!';
    }

    let divText = document.createTextNode(winMessage);

    div.appendChild(divText);

    div.className = 'popupWin';

    document.body.appendChild(div);
}

function removeDuplicates (arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function removeSpaces(arr) {
    return arr.filter(element => element !== " ");
  }