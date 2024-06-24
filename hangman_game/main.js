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
    movies: ["Inception", "Titanic", "Gladiator", "Avatar", "Frozen", "Casablanca", "Amadeus", "Rocky", "Braveheart", "Vertigo"],
    people: ["Einstein", "Newton", "Aristotle", "Beethoven", "Galileo", "Cleopatra", "Shakespeare", "Gandhi", "Mandela", "Tesla"],
    countries: ["France", "Germany", "Japan", "Canada", "Brazil", "Australia", "India", "China", "Egypt", "Italy"]
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