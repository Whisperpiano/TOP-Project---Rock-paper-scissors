const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const rockBtn = document.getElementById("rock");
const score_div = document.querySelector(".score__container");
const result_div = document.querySelector(".result");
const userScore_span = document.querySelector(".user-score");
const computerScore_span = document.querySelector(".computer-score");
let userScore = 0;
let computerScore = 0;

// GET computer choice randomly either "Rock", "Paper", "Scissors"

function getComputerChoice() {
    // Store options
    let options = ["rock", "paper", "scissors"];
    // Choose one random option
    let chooseRandomOption = options[Math.floor(Math.random() * options.length)];
    // Return random option
    return chooseRandomOption.toLowerCase();
}
// function game() {

//     let loose = 0
//     let win = 0

//     function playRound() {

//         const playerSelection = prompt("Rock, paper or scissors?", "paper");
//         const playerSelectionToLow = playerSelection.toLowerCase()
//         const computerSelection = getComputerChoice();
    
    
//         if (playerSelectionToLow === computerSelection) {
//             result = `That is a DRAW!`
    
//         } else if ((playerSelectionToLow === "rock" && computerSelection === "paper")
//          || (playerSelectionToLow === "paper" && computerSelection === "scissors") 
//          || (playerSelectionToLow === "scissors" && computerSelection === "rock")) {
//             result = `You LOOSE, ${computerSelection} beats ${playerSelection}`
//             loose++
    
//         } else {
//            result = `You WIN! ${playerSelection} beats ${computerSelection}`
//            win++
//         }
    
//         return result;
//     }
   

//     for (i = 1; i < 6; i++) {
//     console.log(`Result of game ${i}: ` + playRound())
//     }

//     if (win > loose) {
//         console.log(`CONGRATULATIONS! YOU WON!
//         Final score:
//         WIN: ${win}
//         LOOSE: ${loose}`)
//     } else if (loose > win) {
//         console.log(`I am sorry, you loose! :(
//         Final score:
//         WIN: ${win}
//         LOOSE: ${loose}`)
//     } else {
//         console.log(`That is a draw, try again!.
//         Final score:
//         WIN: ${win}
//         LOOSE: ${loose}`)
//     }

   
// }

// game()


function resetGame() {
    userScore = 0
    computerScore = 0
    userScore_span.textContent = userScore
    computerScore_span.textContent = computerScore
    result_div.textContent = ""
}

function win(user, computer) {
  userScore++;
  userScore_span.textContent = userScore;
  result_div.textContent = `User: ${user} - Computer: ${computer}. You WIN!`;
  score_div.classList.add("green_shadow");
  setTimeout(() => { score_div.classList.remove("green_shadow") }, 600);
  if (userScore === 5) {
    alert("YOU WIN THE GAME!");
    resetGame();
  }
}

function loose(user, computer) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    result_div.textContent = `User: ${user} - Computer: ${computer}. You LOSE!`;
    score_div.classList.add("red_shadow");
    setTimeout(() => { score_div.classList.remove("red_shadow") }, 600);
    if (computerScore === 5) {
        alert("YOU LOSE THE GAME!");
        resetGame()
      }
}

function draw(user, computer) {
    userScore_span.textContent = userScore;
    result_div.textContent = `User: ${user} - Computer: ${computer}. It's a DRAW!`;
    score_div.classList.add("gray_shadow");
    setTimeout(() => { score_div.classList.remove("gray_shadow") }, 600);
}

function game(playerSelection) {
    const computerChoice = getComputerChoice();

    switch (playerSelection + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(playerSelection, computerChoice)
            break;

        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            loose(playerSelection, computerChoice)
            break;

        default:
            draw(playerSelection, computerChoice)
            break
    }
}

function playerSelection() {

    paperBtn.addEventListener("click", () => {
        game("paper");
    })

    rockBtn.addEventListener("click", () => {
        game("rock");
    })

    scissorsBtn.addEventListener("click", () => {
        game("scissors");
    })
}

playerSelection()



