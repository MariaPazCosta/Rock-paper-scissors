
let playerScore = 0
let comScore = 0
let currentRound = 0;
const maxRounds = 5;

function generateComputerChoice(){
    let max = 4
    let min = 1
    let option = Math.floor(Math.random() * (max - min) + min)
    return option
}


function getPlayerChoice(){
    
    const butt = document.querySelector("#buttons")

    butt.addEventListener("click", (event)=>{
         let target = event.target
         let id = target.id
         
        
        switch(id){
            case "rock":
                playRound(1)
                break
            case "paper":
                playRound(2)
                break
            case "scissors":
                playRound(3)
                break
        }
        
    })  

 }

 function playRound(humanChoice) {
    compChoice = generateComputerChoice();
    console.log("computer choice: " + compChoice);
    console.log("human choice: " + humanChoice);

    let gameText = document.querySelector("#game-text");

    if (humanChoice == 1 && compChoice == 3 ||
        humanChoice == 2 && compChoice == 1 ||
        humanChoice == 3 && compChoice == 2) {
        
        gameText.textContent = "YOU WIN!";
        playerScore += 10;
    } else if (compChoice == humanChoice) {
        gameText.textContent = "It's a tie!";
    } else {
        gameText.textContent = "Computer wins";
        comScore += 10;
    }

    // Avanzar a la siguiente ronda
    currentRound++;
    if (currentRound < maxRounds) {
        updateRoundDisplay();
    } else {
        determineWinner();
        
    }
}

function updateRoundDisplay() {
    let rounds = document.querySelector("#round");
    rounds.textContent = "Round: " + (currentRound + 1);
}

function determineWinner() {
    //seleccion de los p pare mostrar el texto de los ganadores
    let scoreText = document.querySelector("#score-text");
    let gameText = document.querySelector("#game-text");
    let buttons= document.querySelector("#buttons")
    
    //creación del boton para resetear
    let resetBtt = document.createElement("button")
    resetBtt.setAttribute("id","reset")
    resetBtt.textContent="PLAY AGAIN!"

    let card = document.querySelector(".card")

    //definicion de los ganadores
    if (comScore > playerScore) {
        gameText.textContent = "Computer wins!";
    } else if (comScore == playerScore) {
        gameText.textContent = "It's an overall tie!";
    } else {
        gameText.textContent = "Player wins!";
    }

    scoreText.textContent = `Final Score - Computer: ${comScore} Player: ${playerScore}`;
    
    //suma el boton para resetear y elimina los otros botones 
    card.removeChild(buttons)
    card.appendChild(resetBtt)
    resetBtt.addEventListener("click", ()=>{
            location.reload();
    })
    
    
    
}




function playGame() {
    currentRound = 0;
    playerScore = 0;
    comScore = 0;
    updateRoundDisplay();
    getPlayerChoice();
}

playGame();
