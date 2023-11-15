// GET computer choice randomly either "Rock", "Paper", "Scissors"

function getComputerChoice() {
    // Store options
    let options = ["Rock", "Paper", "Scissors"];
    // Choose one random option
    let chooseRandomOption = options[Math.floor(Math.random() * options.length)];
    // Return random option
    return chooseRandomOption.toLowerCase();
}

function game() {

    let loose = 0
    let win = 0

    function playRound() {

        const playerSelection = prompt("Rock, paper or scissors?", "paper");
        const playerSelectionToLow = playerSelection.toLowerCase()
        const computerSelection = getComputerChoice();
    
    
        if (playerSelectionToLow === computerSelection) {
            result = `That is a DRAW!`
    
        } else if ((playerSelectionToLow === "rock" && computerSelection === "paper")
         || (playerSelectionToLow === "paper" && computerSelection === "scissors") 
         || (playerSelectionToLow === "scissors" && computerSelection === "rock")) {
            result = `You LOOSE, ${computerSelection} beats ${playerSelection}`
            loose++
    
        } else {
           result = `You WIN! ${playerSelection} beats ${computerSelection}`
           win++
        }
    
        return result;
    }
   

    for (i = 1; i < 6; i++) {
    console.log(`Result of game ${i}: ` + playRound())
    }

    if (win > loose) {
        console.log(`CONGRATULATIONS! YOU WON!
        Final score:
        WIN: ${win}
        LOOSE: ${loose}`)
    } else if (loose > win) {
        console.log(`I am sorry, you loose! :(
        Final score:
        WIN: ${win}
        LOOSE: ${loose}`)
    } else {
        console.log(`That is a draw, try again!.
        Final score:
        WIN: ${win}
        LOOSE: ${loose}`)
    }

   
}

game()





