

function generateComputerChoice(){
    let max = 4
    let min = 1
    let option = Math.floor(Math.random() * (max - min) + min)
    return option
}

// 1 es piedra, 2 es papel y 3 es tijeras
function showChoice(choice, player){
    if(choice==1){
        console.log(player + " has chosen rock")
    }else if(choice==2){
        console.log(player + " has chosen paper")
    }else{
        console.log(player +" has chosen scissors")
    }
}


let playerName= prompt("Enter your name")



function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    for(i=0; i< 5; i++){
        let humanChoice= prompt("Choose between: 1: rock , 2: paper 3: scissors");
        let compChoice= generateComputerChoice()
        
        showChoice(compChoice, "Computer")
        showChoice(humanChoice, playerName)
        playRound(humanChoice,compChoice)
    }
    
    function playRound (humanChoice, compChoice){
        if(humanChoice == 1 && compChoice == 3){
            console.log("Human wins this round!")
            humanScore+=10
        }else if(humanChoice == 2 && compChoice == 1){
            console.log("Human wins this round!")
            humanScore+=10
        }else if(humanChoice==3 && compChoice == 2){
            console.log("Human wins this round!")
            humanScore+=10
        }else if (compChoice == humanChoice){
            console.log("It is a tie!")
            
        }else{
            console.log("Computer wins")
            computerScore+=10
        }
            
    }

    if(humanScore > computerScore){
        console.log(playerName+ "Is the winner")
        console.log(playerName+ " score is: "+humanScore)
        console.log("Computer score is: " + computerScore)
    }else if (humanScore == computerScore){
        console.log("It is a tie!")
        console.log(playerName+ " score is: "+humanScore)
        console.log("Computer score is: " + computerScore)
    }else{
        console.log( "The computer is the winner")
        console.log(playerName+ " score is: "+humanScore)
        console.log("Computer score is: " + computerScore)
    }
}

playGame()