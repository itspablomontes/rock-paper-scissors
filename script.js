let playerWins =  0;
let computerWins = 0;
let playerChoice;
let computerChoice;
let resultWarning;

const choiceContainer = document.getElementById("options-container");
const playButton = document.getElementById('play');
const playAgainButton = document.getElementById('play-again');
const displayResult = document.getElementById('result-container')
const resultChoices = document.getElementById('result-choices')
const resultMessage = document.getElementById('result')
const warningMessage = document.getElementById('warning')
const moveOption = document.getElementsByClassName('option')



playButton.addEventListener('click', runGame)
playAgainButton.addEventListener('click', tryAgain)
// for(let i = 0; i < moveOption.length ; i++){
//     moveOption[i].addEventListener('click', showResult) 
// };

function getPlayerChoice(choice){
    switch (choice) {
        case "Rock":
            playerChoice = "Rock"
            break;
        case "Paper":
            playerChoice = "Paper"
            break;
        case "Scissors":
            playerChoice = "Scissors"
            break;
        default:
            break;
    }
    getComputerChoice();
    getResult();
    showResult();
};
function getComputerChoice(){
    computerChoice = Math.floor(Math.random()* 3) + 1;
    switch(computerChoice){
        case 1:
            computerChoice = "Rock"
            break
        case 2:
            computerChoice = "Paper"
            break
        case 3:
            computerChoice = "Scissors"
            break
    }
};


function getResult() {
    if (playerChoice === computerChoice) {
        resultWarning = "Draw!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        playerWins++;
        resultWarning = "You Won!"
    } else {
        computerWins++;
        resultWarning = "You Lost!";
    }
    };
function showResult(){
        document.getElementById('player-wins').innerText = `Player:${playerWins}`
        document.getElementById('computer-wins').innerText = `Computer:${computerWins}`
        resultChoices.innerText = `You chose ${playerChoice}, the Computer chose ${computerChoice}`
        resultMessage.innerText = `${resultWarning}`
        choiceContainer.style.display = 'none';
        playAgainButton.style.display = 'block';
        displayResult.style.display = "flex"
        warningMessage.style.display = "none"
    }



function runGame(){
    playButton.style.display = "none";
    choiceContainer.style.display = "flex";
    warningMessage.style.display = "flex";
}
function tryAgain(){
    displayResult.style.display = "none"
    playAgainButton.style.display = "none";
    warningMessage.style.display = "flex"
    choiceContainer.style.display = "flex";
}



//runGame();


