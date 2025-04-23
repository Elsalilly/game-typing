// Variables for DOM elements
const word = document.getElementById("word");
const input = document.querySelector("input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

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

//INITIAL VALUES

//Initializing word
let randomWord;

//Initializing score
let score = 0;

//Initializing time
let time = 15;

//Counting Down
let timeRunning;

// FUNCTIONS
function startGame() {
    addWordToDOM(); //Initial call
    clearInterval(timeRunning);
    timeRunning = setInterval(updateTime, 1000); //start timer
}

//add random words from array
function addWordToDOM() {
    if (words.length === 0) {
        console.error("Words array is empty!");
        return;
    }
    
    randomWord = words[Math.floor(Math.random()* words.length)];
    document.getElementById("word").innerText = randomWord;
}

// adding 5 points for every correct answer
function updateScore() {
    score += 5;
    scoreEl.innerText = score;
}


 // Update time
function updateTime() {
    time--;
    timeEl.innerHTML = time + "s";

    if (time === 0) {
        clearInterval(timeRunning);
        endgame();
    }
}


function endgame() {
    endgameEl.innerHTML = `<h1>Time's up!</h1> <p>Your final score is ${score}</p> <button onClick="location.reload()">Reload</button>`;
    endgameEl.style.display = 'flex';

    settings.style.display = "block"; //shows the panel
    settingsBtn.style.display = "block"; //shows the button
}

//Choose difficulty
function chooseDifficulty() {
    clearInterval(timeRunning); // stop timer

    const selectedDifficulty = difficultySelect.value;
    localStorage.setItem("difficulty", selectedDifficulty); //Save difficulty

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

    timeEl.innerText = time;
    input.value = "";

    endgameEl.style.display = "none";
    settingsBtn.style.display = 'none'; //hides button when the game starts
    
    startGame();
}

//USER INPUT / EVENT LISTENERS
input.addEventListener("input", () => {
    const wordInput = input.value.trim();
    const selectedDifficulty = difficultySelect.value;

    if(wordInput === randomWord) { //check so input and array are the same
        addWordToDOM();
        updateScore();

        input.value ="";

        if(selectedDifficulty === "hard") {
            time += 2;
        } else if (selectedDifficulty === "medium") {
            time += 5;
        } else {
            time += 10;
        }
        updateTime();
    }
});

//Settings BTN CLICK
settingsBtn.addEventListener("click", () => {
    settings.style.display = "none"; //hides the panel
    settingsBtn.style.display = "none"; //hides the button
});

settingsForm.addEventListener("change", chooseDifficulty);


// STARTING THE GAME
// Read difficulty from storage
const savedDifficulty = localStorage.getItem("difficulty");
if (savedDifficulty) {
    difficultySelect.value = savedDifficulty;
}

chooseDifficulty();
