const container = document.querySelector('#container');

const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');

const resultDiv = document.createElement('div');
const points = document.createElement('div');
const gameOverDiv = document.createElement('div');

document.body.appendChild(resultDiv);
document.body.appendChild(points);
document.body.appendChild(gameOverDiv);

rpsButtons = [button1 , button2, button3];

let playerWins = 0;
let playerLosses = 0;
let playerTies = 0; 

rpsButtons.forEach(button => {
    button.classList.add("button");
    container.appendChild(button);
    button.addEventListener('click', () => {    //button clicks results in playround
    resultDiv.textContent = playRound(button.innerText, getComputerChoice());
    gameCounter();
    gameOver();
    });
});


button1.setAttribute('style', 'color: white; background: blue; font-size: 20px;');
button2.setAttribute('style', 'color: white; background: red; font-size: 20px;');
button3.setAttribute('style', 'color: white; background: black; font-size: 20px;');

button1.textContent = "Rock";
button2.textContent = "Paper";
button3.textContent = "Scissors";


choices = ['Rock', 'Paper', 'Scissors'];




function random(number) {  //returns random number from 0 to 'number' parameter
    return(Math.floor(Math.random() * number))
}
function getComputerChoice() {
    return(choices[random(3)])
}

function playRound(playerSelection, computerSelection) {
    //Capitalise player selection
    playerSelection_lower = playerSelection.toLowerCase();
    upp_first_letter = playerSelection[0].toUpperCase();
    playerSelection = playerSelection_lower.replace(playerSelection_lower[0], upp_first_letter);

    win_message = `You Win! ${playerSelection} beats ${computerSelection}`
    lose_message = `You Lose! ${computerSelection} beats ${playerSelection}`
    draw_message = `You Tied! Both parties chose ${playerSelection}`

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return(lose_message)
        } else if (computerSelection === "Rock") {
            return(draw_message)
        } else{
            return(win_message)
        }
    }
    else if (playerSelection === "Paper") {
        if(computerSelection === "Scissors") {
            return(lose_message)
        } else if (computerSelection === "Paper") {
            return(draw_message)
        } else{
            return(win_message)
        }
    }
    else{
        if (computerSelection === "Rock") {
            return(lose_message)
        } else if (computerSelection === "Scissors") {
            return(draw_message)
        } else {
            return(win_message)
        }
    }
}

function gameCounter() {
    result_slice = resultDiv.textContent.slice(0,8);
        if (result_slice === `You Win!`) {
            playerWins += 1
        } else if (result_slice === `You Tied`){
            playerTies += 1
        } else {
            playerLosses += 1
        }
        points.textContent = `Player: ${playerWins} Computer: ${playerLosses} Draws: ${playerTies}`
}

function gameOver(){
    if (playerWins === 5){
        gameOverDiv.textContent = "Congratulations: You Won!"
        playerWins = 0;
        playerLosses = 0;
        playerTies = 0
    }else if (playerLosses === 5){
        gameOverDiv.textContent = "Game Over: Better Luck Next Time!"
        playerWins = 0;
        playerLosses = 0;
        playerTies =0;
    }else{
        gameOverDiv.textContent = ""
    }
    
}