// Variables for the DOM elements


const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 10;
const text = document.getElementById("text");

const word = document.getElementById("word");

function addWordToDOM() { //add random words from array
    randomWord = words[Math.floor(Math.random()* words.length)];
    document.getElementById("word").innerText = randomWord;
}


const input = document.querySelector("input");

input.addEventListener("input", () => {
    const wordInput = input.value.trim();

    if(wordInput === randomWord) { //check so input and array are the same
        addWordToDOM();
        updateTime();
        input.value ="";
    }
});

const scoreEl = document.getElementById("score");

function updateScore() {
    if(newWord === word) {
        const counter = document.getElementById("score");
        counter++;
    }
}

const timeEl = document.getElementById("time");
function updateTime() {
    time += 5;
    timeEl.innerText = time;
}

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

addWordToDOM(); //Initial call