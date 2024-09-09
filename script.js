let playerWins =  0;
let computerWins = 0;

let computerChoice;
let playerChoice 
function getPlayerChoice(){
    playerChoice = Number(prompt("Choose an option: 1-Rock 2-Paper 3-Scissors"));
    switch (playerChoice) {
        case 1:
            userChoice = "Rock"
            console.log(`You chose ${playerChoice}`)
            break;
        case 2:
            userChoice = "Paper"
            console.log(`You chose ${playerChoice}`)
            break;
        case 3:
            userChoice = "Scissors"
            console.log(`You chose ${playerChoice}`)
            break;
        default:
            console.log("Invalid value, please restart the page and choose a valid one")
            break;
    }
}
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

function getResult(){
    if(userChoice == "Rock" && computerChoice == "Rock"){
        console.log("Draw!")
    }else if (userChoice = "Rock" && computerChoice == "Paper"){
        computerWins = computerWins + 1
        console.log("You lost!")
    }else if (userChoice = "Rock" && computerChoice == "Scissors"){
        playerWins = playerWins + 1
        console.log("You won!")
    }else if (userChoice = "Paper" && computerChoice == "Rock"){
        playerWins = playerWins + 1
        console.log("You won!")
    }else if (userChoice = "Paper" && computerChoice == "Paper"){
        console.log("Draw!")
    }else if (userChoice = "Paper" && computerChoice == "Scissors"){
        computerWins = computerWins + 1
        console.log("You lost!")
    }else if (userChoice = "Scissors" && computerChoice == "Rock"){
        computerWins = computerWins + 1
        console.log("You lost!")
    }else if (userChoice = "Scissors" && computerChoice == "Paper"){
        playerWins = playerWins + 1
        console.log("You won!")
    }else if (userChoice = "Scissors" && computerChoice == "Scissors"){
        console.log("Draw!")
    }
    }


function runGame(){
    getPlayerChoice()
    getComputerChoice() 
    getResult()
    console.log(`Player wins: ${playerWins} - Computer wins: ${computerWins}`)
    let confirmReplay = confirm("Do you want to play again?")
    if(confirmReplay == true){
        runGame()
    }
}


runGame();


