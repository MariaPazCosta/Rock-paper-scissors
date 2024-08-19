
let playerScore = 0
let comScore = 0

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

 function playRound (humanChoice){
    
    
    compChoice = generateComputerChoice()
    console.log("computer choice " +compChoice)
    console.log("human choice " + humanChoice)
    
    let gameText = document.querySelector("#game-text")
     
     if(humanChoice == 1 && compChoice == 3){
         gameText.textContent="YOU WIN!"
         playerScore += 1 
        
     }else if(humanChoice == 2 && compChoice == 1){
         gameText.textContent="YOU WIN!"
         playerScore += 1 
     
    }else if(humanChoice==3 && compChoice == 2){
         gameText.textContent="YOU WIN!"
         playerScore += 1 
      
     }else if (compChoice == humanChoice){
        gameText.textContent="Its a tie!"
        
        
    }else{
         gameText.textContent="Computer wins"
         comScore += 1
     
    }
    let scoreText = document.querySelector("#score-text")
    scoreText.textContent=`Computer: ${comScore}`+ " " +` Player: ${playerScore}`
}

getPlayerChoice()


// let p = document.querySelector("p")
//     if (comScore > playerScore){
//         p.textContent= "You lose"
//         p.textContent= `Player Score:  ${playerScore}
//                         Computer Score ${comScore}`
//     }else if(comScore == playerScore){
        
//         p.textContent= "Its a tie!"
//         p.textContent= `Player Score:  ${playerScore}
//                         Computer Score ${comScore}`
//     }else{
//         p.textContent= "YOU WIN!"
//         p.textContent= `Player Score:  ${playerScore}
//                         Computer Score ${comScore}`
//     }