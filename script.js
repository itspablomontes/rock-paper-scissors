let playerWins =  0;
let computerWins = 0;
let playerChoice
let computerChoice;
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
    if(playerChoice == "Rock" && computerChoice == "Rock"){
        console.log("Draw!")
    }else if (playerChoice == "Rock" && computerChoice == "Paper"){
        computerWins == computerWins + 1
        console.log("You lost!")
    }else if (playerChoice == "Rock" && computerChoice == "Scissors"){
        playerWins = playerWins + 1
        console.log("You won!")
    }else if (playerChoice == "Paper" && computerChoice == "Rock"){
        playerWins = playerWins + 1
        console.log("You won!")
    }else if (playerChoice == "Paper" && computerChoice == "Paper"){
        console.log("Draw!")
    }else if (playerChoice == "Paper" && computerChoice == "Scissors"){
        computerWins == computerWins + 1
        console.log("You lost!")
    }else if (playerChoice == "Scissors" && computerChoice == "Rock"){
        computerWins = computerWins + 1
        console.log("You lost!")
    }else if (playerChoice == "Scissors" && computerChoice == "Paper"){
        playerWins = playerWins + 1
        console.log("You won!")
    }else if (playerChoice == "Scissors" && computerChoice == "Scissors"){
        console.log("Draw!")
    }
    console.log(`Player wins: ${playerWins} - Computer wins: ${computerWins}`)
    }


function runGame(playerChoice){
    getPlayerChoice(playerChoice)
    getComputerChoice() 
    getResult()
    console.log(`Player wins: ${playerWins} - Computer wins: ${computerWins}`)
    let confirmReplay = confirm("Do you want to play again?")
    if(confirmReplay == true){
        runGame()
    }
}


//runGame();


