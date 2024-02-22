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
const playerImgDiv = document.querySelector('#player-img');
const computerImgDiv = document.querySelector('#cpu-img');

let isGameOn = false;
startBtn.addEventListener('click', ()=>{
    startBtnBg.remove();
    isGameOn = true;
    computerPoints = 0;
    playerPoints = 0;
    score.textContent = playerPoints+" - "+computerPoints;
    textOut.textContent = '';
    playerImgDiv.style.backgroundImage = '';
    computerImgDiv.style.backgroundImage = '';

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

const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const lizardBtn = document.querySelector('#lizard-btn');
const spockBtn = document.querySelector('#spock-btn');

options.addEventListener('mouseover', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock-btn':
            rockBtn.textContent = '';
            rockBtn.style.backgroundImage = 'url(img/rock.png)';
            rockBtn.classList.add('opt-btn-hover');
            break;
        case 'paper-btn':
            paperBtn.textContent = '';
            paperBtn.style.backgroundImage = 'url(img/paper.png)';
            paperBtn.classList.add('opt-btn-hover');
            break;
        case 'scissors-btn':
            scissorsBtn.textContent = '';
            scissorsBtn.style.backgroundImage = 'url(img/scissors.png)';
            scissorsBtn.classList.add('opt-btn-hover');
            break;
        case 'lizard-btn':
            lizardBtn.textContent = '';
            lizardBtn.style.backgroundImage = 'url(img/lizard.png)';
            lizardBtn.classList.add('opt-btn-hover');
            break;
        case 'spock-btn':
            spockBtn.textContent = '';
            spockBtn.style.backgroundImage = 'url(img/spock.png)';
            spockBtn.classList.add('opt-btn-hover');
            break;
        default:
            break;
    }
});

options.addEventListener('mouseout', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock-btn':
            rockBtn.classList.remove('opt-btn-hover');
            rockBtn.textContent = 'R';
            rockBtn.style.backgroundImage = '';
            break;
        case 'paper-btn':
            paperBtn.classList.remove('opt-btn-hover');
            paperBtn.textContent = 'P';
            paperBtn.style.backgroundImage = '';
            break;
        case 'scissors-btn':
            scissorsBtn.classList.remove('opt-btn-hover');
            scissorsBtn.textContent = 'S';
            scissorsBtn.style.backgroundImage = '';
            break;
        case 'lizard-btn':
            lizardBtn.classList.remove('opt-btn-hover');
            lizardBtn.textContent = 'L';
            lizardBtn.style.backgroundImage = '';
            break;
        case 'spock-btn':
            spockBtn.classList.remove('opt-btn-hover');
            spockBtn.textContent = 'Sp';
            spockBtn.style.backgroundImage = '';
            break;
        default:
            break;
    }
});

// the actual game code

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
                imgResults(playerChoice, computerChoice);
            } else if (result) {
                playerPoints++;
                textOut.textContent = `You win this round! ${playerChoice} beats ${computerChoice.at(0).toUpperCase().concat(computerChoice.slice(1))}`;
                imgResults(playerChoice, computerChoice);
            } else if (!result) {
                computerPoints++;
                textOut.textContent = `You loose this round! ${computerChoice.at(0).toUpperCase().concat(computerChoice.slice(1))} beats ${playerChoice}`;
                imgResults(playerChoice, computerChoice);
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

function imgResults (playerChoice, computerChoice) {
    playerImgDiv.setAttribute('class', 'img-div');
    playerImgDiv.style.backgroundImage = `url(img/${playerChoice.toLowerCase()}.png)`;
    computerImgDiv.setAttribute('class', 'img-div');
    computerImgDiv.style.backgroundImage = `url(img/${computerChoice.toLowerCase()}.png)`;
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