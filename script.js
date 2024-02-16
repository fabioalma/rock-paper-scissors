const startBtn = document.querySelector('#start-btn');
const startBtnBg = document.querySelector('.play');
let isGameOn = false;
startBtn.addEventListener('click', ()=>{
    startBtnBg.remove();
    startBtn.textContent = 'Play Again'
    isGameOn = true;
});

const score = document.querySelector('#points');

const options = document.querySelector('.options');
options.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock-btn':
            playRound('rock',getComputerChoice());
            break;
        case 'paper-btn':
            playRound('paper',getComputerChoice());
            break;
        case 'scissors-btn':
            playRound('scissors',getComputerChoice());
            break;
    }
});

function getComputerChoice () {
    let randNum = Math.floor(Math.random()*3);
    return (
        (randNum == 0) ? "rock" : 
        (randNum == 1) ? "paper" :
        "scissors"
    );
}

function playRound (playerSelection, computerSelection) {
    console.log("computer: "+computerSelection+"\nplayer: "+playerSelection)
    if (playerSelection === computerSelection) {
        console.log('tie');
        return("tie");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log('win');
        return(true)
    } else {
        console.log('loss');
        return(false)
    };
}

function playGame () {
    let computerPoints = 0;
    let playerPoints = 0;
    let result;
    let playerChoice;
    let computerChoice;
    score.textContent = playerPoints+" - "+computerPoints;
    console.log(playerPoints+" - "+computerPoints)
    if (computerPoints < 5 && playerPoints < 5) {
        playerChoice = getPlayerChoice();
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
        score.textContent = playerPoints+" - "+computerPoints;
        console.log(playerPoints+" - "+computerPoints)
        computerPoints = computerPoints;
        playerPoints = playerPoints;
    };
    if (computerPoints < playerPoints) {
        return(`Congratulations! You win!\nFinal score: ${computerPoints}-${playerPoints}`)
    } else {
        return(`Bad luck! You'll win next time\nFinal score: ${computerPoints}-${playerPoints}`)
    };
}