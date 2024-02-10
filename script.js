//DEFINE variables to null
//COMPUTE a 5 round game
    //COMPUTE a r-p-s round (computerSelection, playerSelection)
        //GET computer's choice
        //GET player's selection
      //RETURN round win loss or tie
      //ADD a point to the winning player
    //RETURN a game win loss or tie

let playerChoice = prompt("Choose: Rock, Paper or Scissors","");
let computerChoice = getComputerChoice();
console.log(round(playerChoice, computerChoice));

function getComputerChoice () {
    let randNum = Math.floor(Math.random()*3);
    return (
        (randNum == 0) ? "rock" : 
        (randNum == 1) ? "paper" :
        "scissors"
    );
}

function round (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("computer: "+computerSelection+"\nplayer: "+playerSelection)
    if (playerSelection === computerSelection) {
        return(`It's a tie! Both players selected ${playerSelection}`);
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return("You loose. Paper beats Rock");
        } else {
            return("You win. Rock beats Scissors");
        };
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return("You loose. Scissors beats Paper");
        } else {
            return("You win. Paper beats Rock");
        };
    } else {
        if (computerSelection === "rock") {
            return("You loose. Rock beats Scissors");
        } else {
            return("You win. Scissors beats Paper");
        };
    };
}
