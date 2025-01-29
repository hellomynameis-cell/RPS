




let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#Rock");
rock.addEventListener("click", () => {
    humanChoice = "Rock";
    playGame();
  });

const scissors = document.querySelector("#Scissors");
scissors.addEventListener("click", () => {
    humanChoice = "Scissors";
    playGame();
  });

const paper = document.querySelector("#Paper");
paper.addEventListener("click", () => {
    humanChoice = "Paper";
    playGame();
  });


const result =document.querySelector("#result");
const score =document.querySelector("#score");



//btn.addEventListener("click", playGame());


function getComputerChoice() {
    let computerMove = "";
    let random = Math.ceil(Math.random() * 3);

    switch (random) {
        case 1:
            computerMove = "Rock";
            break
        case 2:
            computerMove = "Paper";
            break
        default:
            computerMove = "Scissors";     
    }

    return computerMove
}

//function getHumanChoice() {
  //  humanMove = prompt("Rock, Paper, or Scissors? ").toLowerCase();

   // return humanMove.charAt(0).toUpperCase() + humanMove.slice(1)
//}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            result.textContent = "Tie!"
        } else if(
            humanChoice == "Rock" && computerChoice == "Scissors" ||
            humanChoice == "Paper" && computerChoice == "Rock" ||
            humanChoice == "Scissors" && computerChoice == "Paper"
        ) {
            humanScore += 1;
            result.textContent = "You win";
        } else {
            computerScore += 1;
            result.textContent = "You lose";
        }
    }
    //console.log("This is the result of your RPS game")
    
    
    
    //for (let i = 0; i < 5; i++) {
    //let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    //console.log(`Round ${i + 1}`)
    playRound(humanChoice, computerChoice);
    let text = "Computer "+computerScore +" vs Human:" + humanScore;
    console.log (text);
    score.textContent = text;

    if (computerScore>4) alert ("You lose!");
    if (humanScore>4) alert ("You win!");
    //}

}

