
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

function game() {
    player_wins = 0
    player_losses = 0
    player_ties = 0
    
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper, Scissors?:");
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        result_slice = result.slice(0,8);
        if (result_slice === `You Win!`) {
            player_wins += 1
        } else if (result_slice === `You Tied`){
            player_ties += 1
        } else {
            player_losses += 1
        }
    }
    if (player_wins > player_losses) {
        console.log("Winner: Player")
    } else if (player_losses > player_wins) {
        console.log("Winner: Computer")
    } else {
        console.log("Winner: Nobody")
    }

}
 game()
 