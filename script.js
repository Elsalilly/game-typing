
//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 15;

let timeRunning; // variable for the interval

function startGame() {
    addWordToDOM(); //Initial call
    timeRunning = setInterval(startTimer, 1000); //start timer
}

const word = document.getElementById("word");

function addWordToDOM() { //add random words from array
    randomWord = words[Math.floor(Math.random()* words.length)];
    document.getElementById("word").innerText = randomWord;
}

const text = document.getElementById("text");
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

function updateScore() { // adding 5 points for every correct answer
    score += 5;
    scoreEl.innerText = score;
}


const timeEl = document.getElementById("time"); // adding 5 seconds for every correct answer
function updateTime() {
    time += 5;
    timeEl.innerText = time;
}


function startTimer() {
    time--;
    timeEl.innerText = time;
    console.log(time);
    
    if (time === 0) {
        clearInterval(timeRunning);
        endgame();
    }
}

const endgameEl = document.getElementById("end-game-container");

function endgame() {
    endgameEl.style.display = 'block';

    settings.style.dysplay = "block"; //shows the panel
    settingsBtn.style.display = "block"; //shows the button
}

const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

settingsBtn.addEventListener("click", hideSettings);

function hideSettings() {
    settingsBtn.style.display = 'none'; //hides the button
}

settingsBtn.addEventListener("click", () => {
    settings.style.dysplay = "none"; //hides the panel
    settingsBtn.style.display = "none"; //hides the button
});

settingsBtn.onclick = () => location.reload();

settingsForm.addEventListener("click", chooseDifficulty); //needs like a double click to change

function chooseDifficulty(e) {
    e.preventDefault(); // prevent form from submitting normally

    clearInterval(timeRunning); // stop timer

    const selectedDifficulty = difficultySelect.value;

    if (selectedDifficulty === "easy") {
        time = 15;
    } else if (selectedDifficulty === "medium") {
        time = 10;
    } else if (selectedDifficulty === "hard") {
        time = 5;
    }

    //Reset
    score = 0;
    scoreEl.innerText = score;

    addWordToDOM();

    timeEl.innerText = time;

    input.value = "";

    endgameEl.style.display = "none";

    startGame();
    hideSettings(); //hide settings when the game starts
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