//DEFINE variables to null
//COMPUTE a 5 round game
    //COMPUTE a r-p-s round (computerSelection, playerSelection)
        //GET computer's choice
        //GET player's selection
      //RETURN round win loss or tie
      //ADD a point to the winning player
    //RETURN a game win loss or tie

let computerSelection;
let playerSelection;

function getComputerChoice () {
    let randNum = Math.floor(Math.random()*3);
    console.log(randNum);
    return (
        (randNum == 0) ? "rock" : 
        (randNum == 1) ? "paper" :
        "scissors"
    );
}

console.log(getComputerChoice());