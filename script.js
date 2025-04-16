// Variables for the DOM elements

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
        updateScore();
        updateTime();
        input.value ="";
    }
});

const scoreEl = document.getElementById("score");

function updateScore() {
    score += 5;
    scoreEl.innerText = score;
}


const timeEl = document.getElementById("time");
function updateTime() {
    time += 5;
    timeEl.innerText = time;
}

const timeRunning = setInterval(startTimer, 1000);
function startTimer() {
    time--;
    timeEl.innerText = time;
    if (time === 0) {
        clearInterval(timeRunning);
        endgame();
    }
}

const endgameEl = document.getElementById("end-game-container");

function endgame() {
    endgameEl.style.display = 'block';
}

/*
Add an event listener to the settings button that will hide the settings 

Add an event listener for the settings form so that you can change the difficulty 

Set time depending on difficulty in the eventlistener 
*/

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
startTimer(); //Initial timer