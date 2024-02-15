//console.log(playGame());

function getComputerChoice () {
    let randNum = Math.floor(Math.random()*3);
    return (
        (randNum == 0) ? "rock" : 
        (randNum == 1) ? "paper" :
        "scissors"
    );
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("computer: "+computerSelection+"\nplayer: "+playerSelection)
    if (playerSelection === computerSelection) {
        return("tie");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return(true)
    } else {
        return(false)
    };
}

function playGame () {
    let computerPoints = 0;
    let playerPoints = 0;
    let result;
    let playerChoice;
    let computerChoice;
    console.log("computer: "+computerPoints+" - player: "+playerPoints);
    while (computerPoints < 5 && playerPoints < 5) {
        playerChoice = prompt("Choose: Rock, Paper or Scissors","");
        computerChoice = getComputerChoice();
        result = playRound(playerChoice, computerChoice)
        if (result === "tie") {
            console.log(`It's a tie! Both players selected ${playerChoice.at(0).toUpperCase().concat(playerChoice.slice(1))}`)
        } else if (result) {
            playerPoints++;
            console.log(`You win this round! ${playerChoice.at(0).toUpperCase().concat(playerChoice.slice(1))} beats ${computerChoice.at(0).toUpperCase().concat(computerChoice.slice(1))}`);
        } else if (!result) {
            computerPoints++;
            console.log(`You loose this round! ${computerChoice.at(0).toUpperCase().concat(computerChoice.slice(1))} beats ${playerChoice.at(0).toUpperCase().concat(playerChoice.slice(1))}`);
        } else {
            console.log(`How did you even get this result??`)
        };
        console.log("computer: "+computerPoints+" - player: "+playerPoints);
        computerPoints = computerPoints;
        playerPoints = playerPoints;
    };
    if (computerPoints < playerPoints) {
        return(`Congratulations! You win!\nFinal score: ${computerPoints}-${playerPoints}`)
    } else {
        return(`Bad luck! You'll win next time\nFinal score: ${computerPoints}-${playerPoints}`)
    }
}