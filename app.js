
// Make computer make a choice
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * 3);

    return choices[choiceIndex]
}

// evaluate the winner between computer and player
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length);

    if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" ){
        return "player"
    }

    else if(playerSelection == computerSelection){
        return "tie"
    }

    else{
        return "computer"
    }
}

// Play 5 rounds and print the winner
function game(){
    //initializing the scores
    let playerScore = 0;
    let computerScore = 0;

    //continue until 5 rounds without tie are played and increase the score of the winner
    while(playerScore + computerScore < 5){
        //initializing choices
        const computerSelection = computerPlay();
        let playerSelection = prompt("Your choice: ");

        //checking if the value entered by the user is valid
        if(playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors"){
            alert("Choose a valid choice !");
            playerSelection = prompt("Your choice: ");
        }


        //playing 1 round and storing its result in the result variable
        const result = playRound(playerSelection, computerSelection);

        if(result == "player"){
            playerScore++;
            console.log("You won, computer chose " + computerSelection);
        }

        else if(result == "computer"){
            computerScore++;
            console.log("You lost, computer chose " + computerSelection)
        }
        else{
            console.log("Tie!")
        }
        
    }

    //print results in the console
    return playerScore > computerScore ? console.log("You Won the game !") : console.log("You Lost ! Try next time.");

}
