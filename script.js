let computerPoints;
let playerPoints;
let result;
let playerChoice;
let computerChoice;

const startBtn = document.querySelector('#start-btn');
const startBtnBg = document.querySelector('.play');
const mainPage = document.querySelector('.main-page');
const body = document.querySelector('body');
const fillerRight = document.querySelector('.filler.right');
const fillerLeft = document.querySelector('.filler.left');

let isGameOn = false;
startBtn.addEventListener('click', ()=>{
    startBtnBg.remove();
    isGameOn = true;
    computerPoints = 0;
    playerPoints = 0;
    score.textContent = playerPoints+" - "+computerPoints;
    textOut.textContent = '';
});

const score = document.querySelector('#points');
const textOut = document.querySelector('.text-out');
const playH1 = document.querySelector('.play-h1');
const playP = document.querySelector('#play-p');
const howTo = document.querySelector('#how-to');
const howToLink = document.querySelector('.how-to-link');
const howToBtn = document.querySelector('#how-to-btn');

howToLink.addEventListener('click', (event) => {
    const div = document.createElement('div');
    const para = document.createElement('p');
    const img = document.createElement('img');

    event.preventDefault();
    para.textContent = 'How to Play?'
    para.setAttribute('class', 'play-p')
    div.appendChild(para);
    img.setAttribute('src', 'img/instructions-context.png');
    img.setAttribute('id','instructions-context-img')
    div.appendChild(img);
    div.setAttribute('class', 'instructions');
    startBtnBg.appendChild(div);
    div.addEventListener('mouseleave', () => {
        startBtnBg.addEventListener('click', () => {
            div.remove();
        });
    });
    
});


howToBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    const para = document.createElement('p');
    const img = document.createElement('img');
    const closeBtn = document.createElement('p');

    para.textContent = 'Forgot How to Play?';
    para.setAttribute('class', 'play-p')
    div.appendChild(para);
    img.setAttribute('src', 'img/instructions.png');
    img.setAttribute('id','instructions-img');
    div.appendChild(img);
    //closeBtn.textContent = 'Close';
    closeBtn.setAttribute('class', 'close-btn');
    div.setAttribute('class', 'instructions');
    fillerLeft.appendChild(div);
    mainPage.appendChild(closeBtn);

    closeBtn.addEventListener('click', () => {
        div.remove();
        closeBtn.remove();
    });
});




const options = document.querySelector('.options');
options.addEventListener('click', (event) => {
    if (isGameOn) {
        if (computerPoints < 5 && playerPoints < 5) {
            computerChoice = getComputerChoice();
            let target = event.target;
            switch(target.id) {
                case 'rock-btn':
                    playerChoice = 'Rock';
                    result = playRound('rock', computerChoice);
                    break;
                case 'paper-btn':
                    playerChoice = 'Paper';
                    result = playRound('paper',computerChoice);
                    break;
                case 'scissors-btn':
                    playerChoice = 'Scissors';
                    result = playRound('scissors',computerChoice);
                    break;
                case 'lizard-btn':
                    playerChoice = 'Lizard';
                    result = playRound('lizard',computerChoice);
                    break;
                case 'spock-btn':
                    playerChoice = 'Spock';
                    result = playRound('spock',computerChoice);
                    break;
                default:
                    playerChoice = null;
                    result = playRound(playerChoice,computerChoice);
                    break;
            };

            if (result === '') {
                textOut.textContent = 'You didn\'t press a button! Try again';
            } else if (result === "tie") {
                textOut.textContent = `It's a tie! Both players selected ${playerChoice}`
            } else if (result) {
                playerPoints++;
                textOut.textContent = `You win this round! ${playerChoice} beats ${computerChoice.at(0).toUpperCase().concat(computerChoice.slice(1))}`;
            } else if (!result) {
                computerPoints++;
                textOut.textContent = `You loose this round! ${computerChoice.at(0).toUpperCase().concat(computerChoice.slice(1))} beats ${playerChoice}`;
            };

            result = ''

            score.textContent = playerPoints+" - "+computerPoints;

            if (computerPoints < 5 && playerPoints == 5 ) {
                playH1.textContent = 'Congratulations! You win!';
                playP.textContent = `Final score: ${playerPoints}-${computerPoints}`;
                howTo.textContent = '';
                startBtn.textContent = 'Play Again';
                isGameOn = false;
                mainPage.appendChild(startBtnBg);
            } else if (computerPoints == 5 && playerPoints < 5 ) {
                playH1.textContent = `You lost! You'll win next time...`;
                playP.textContent = `Final score: ${playerPoints}-${computerPoints}`;
                howTo.textContent = '';
                startBtn.textContent = 'Play Again';
                isGameOn = false;
                mainPage.appendChild(startBtnBg);
            };
        };
    }
});

function getComputerChoice () {
    let randNum = Math.floor(Math.random()*5);
    return (
        (randNum == 0) ? "rock" : 
        (randNum == 1) ? "paper" :
        (randNum == 2) ? "scissors" :
        (randNum == 3) ? "lizard" :
        "spock"
    );
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === null) {
        return '';
    } else if (playerSelection === computerSelection) {
        return("tie");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "spock") ||
        (playerSelection === "spock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "lizard") ||
        (playerSelection === "lizard" && computerSelection === "spock") ||
        (playerSelection === "spock" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "lizard") ||
        (playerSelection === "lizard" && computerSelection === "paper")
    ) {
        return(true)
    } else {
        return(false)
    };
}