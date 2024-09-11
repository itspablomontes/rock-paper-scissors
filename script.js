let playerWins =  0;
let computerWins = 0;
let playerChoice;
let computerChoice;

const choiceContainer = document.getElementById("options-container");
const playButton = document.getElementById('play');
const playAgainButton = document.getElementById('play-again');
const displayChoices = document.getElementById('choices');
const displayResult = document.getElementById('result')
const warningMessage = document.getElementById('warning')
const timeCounterMessage = document.getElementById('time-counter')


playButton.addEventListener('click', runGame)
playAgainButton.addEventListener('click', tryAgain)

function getPlayerChoice(choice){
    switch (choice) {
        case "Rock":
            playerChoice = "Rock"
            console.log(`You chose Rock`)
            break;
        case "Paper":
            playerChoice = "Paper"
            console.log(`You chose Paper`)
            break;
        case "Scissors":
            playerChoice = "Scissors"
            console.log(`You chose Scissors`)
            break;
        default:
            console.log("Invalid value, please restart the page and choose a valid one")
            break;
    }
    getComputerChoice();
    getResult();
};
function getComputerChoice(){
    computerChoice = Math.floor(Math.random()* 3) + 1;
    switch(computerChoice){
        case 1:
            computerChoice = "Rock"
            console.log(`The computer chose ${computerChoice}`)
            break
        case 2:
            computerChoice = "Paper"
            console.log(`The computer chose ${computerChoice}`)
            break
        case 3:
            computerChoice = "Scissors"
            console.log(`The computer chose ${computerChoice}`)
            break
    }
};


function getResult() {
    if (playerChoice === computerChoice) {
        console.log("Draw!");
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        playerWins++;
        console.log("You won!");
    } else {
        computerWins++;
        console.log("You lost!");
    }
    console.log(`Player wins: ${playerWins} - Computer wins: ${computerWins}`)
    document.getElementById('player-wins').innerText = `Player:${playerWins}`
    document.getElementById('computer-wins').innerText = `Computer:${computerWins}`
    displayResult.innerText = `You chose ${playerChoice}, the computer chose ${computerChoice}`
    choiceContainer.style.display = 'none';
    playAgainButton.style.display = 'block';
    };


function runGame(){
    playButton.style.display = "none";
    choiceContainer.style.display = "flex";
}
function tryAgain(){
    playAgainButton.style.display = "none";
    choiceContainer.style.display = "flex";
}
function showResult(){
    displayResult.style.display = "block"
}


//runGame();


