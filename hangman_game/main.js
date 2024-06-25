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

        // Outside the loop
        console.log(theStatus);

        // If the letter is wrong
        if (theStatus !== true) {

            // Increase the wrong attempts counter
            wrongAttempts++;

            // Add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // Play fail sound
            document.getElementById('fail').play();

            if (wrongAttempts === 8) {

                endGame();

                lettersContainer.classList.add('finished');

            }

        } else {

            // Play success sound
            document.getElementById('success').play();
        }

    }

});

// End game function
function endGame() {

    // Create popup div
    let div = document.createElement('div');

    // Create text
    let divText = document.createTextNode(`Game Over, The Word Is: ${randomValueValue}`);

    // Append text to div
    div.appendChild(divText);

    // Add class to div
    div.className = 'popup';

    // Append div to body
    document.body.appendChild(div);
}