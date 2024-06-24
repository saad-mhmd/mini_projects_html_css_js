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
document.querySelector('.game-info .category span').innerHTML = randomPropName + ' ' + randomValueValue;

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

// Handle clicking on letters
document.addEventListener('click', (e) => {

    if(e.target.className === 'letter-box') {
        
        e.target.classList.add(("clicked"));

        // Get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // The chosen word
        // console.log(lettersAndSpace);

        lettersAndSpace.forEach((wordLetter, index) => {

            //if the clicked letter is equal to one of the chosec word letters
            if(wordLetter.toLowerCase() === theClickedLetter){

                console.log(`Found At Index ${index}`);

            }

        });  

    }

});