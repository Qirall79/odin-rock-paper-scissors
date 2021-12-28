
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

//initializing the scores
let playerScore = 0;
let computerScore = 0;


//Adding click event to each of the images
const select = document.querySelectorAll(".select img");

select.forEach(selection => {
    selection.addEventListener("click", e => {

        //Hiding any result paragraph from the previous round
        document.querySelector(".lost").style.display = "none";
        document.querySelector(".won").style.display = "none";
        document.querySelector(".tie").style.display = "none";

        //Taking the player and computer choices and storing the results in the "winner" variable
        const playerChoice = e.target.getAttribute("alt");
        const computerChoice = computerPlay();
        const winner = playRound(playerChoice, computerChoice);

        //Update score and display result paragraph below
        if(winner === "computer"){
            computerScore += 1;
            document.querySelector(".lost").textContent = `You Lost! The computer chose ${computerChoice}`;
            document.querySelector(".lost").style.display = "inline-block";
        }
        else if(winner == "player"){
            playerScore += 1;
            document.querySelector(".won").textContent = `You Won! The computer chose ${computerChoice}`;
            document.querySelector(".won").style.display = "inline-block";
        }
        else{
            document.querySelector(".tie").style.display = "inline-block";
        }

        document.querySelector(".computer").textContent = computerScore;
        document.querySelector(".player").textContent = playerScore;


        //Announcing the winner (the one who reached 5 rounds win)
        if(playerScore == 5){
            document.querySelector(".finish p").textContent = "Ma3ndi mantsalk rak naaaadi(a)";
            document.querySelector(".finish").style.display = "flex"
        }

        else if(computerScore == 5){
            document.querySelector(".finish p").textContent = "Yawdi yawdi khassr(a) m3a algorithme";
            document.querySelector(".finish").style.display = "flex"
        }
    })
})


//refresh the page when the "Plaey Again" button is clicked
document.querySelector("button").addEventListener("click", e => {
    document.location.reload(true);
})

