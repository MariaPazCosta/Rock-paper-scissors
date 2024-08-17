


function generateComputerChoice(){
    let max = 4
    let min = 1
    let option = Math.floor(Math.random() * (max - min) + min)
    return option
}


function getPlayerChoice(){
     
    let comScore = 0
    let playerScore = 0
    const butt = document.querySelector("#buttons")
    for (let i = 0 ; i>5; i++){

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
        
    })}
 }

function playRound (humanChoice){
    
    
    compChoice = generateComputerChoice()
    console.log("computer choice " +compChoice)
    console.log("human choice " + humanChoice)
    
    let scoreText = document.querySelector("p")
     
     if(humanChoice == 1 && compChoice == 3){
         scoreText.textContent="YOU WIN!"
        
     }else if(humanChoice == 2 && compChoice == 1){
         scoreText.textContent="YOU WIN!"
     
    }else if(humanChoice==3 && compChoice == 2){
         scoreText.textContent="YOU WIN!"
      
     }else if (compChoice == humanChoice){
        scoreText.textContent="Its a tie!"
        
    }else{
         scoreText.textContent="Computer wins"
     
    }
}

getPlayerChoice()