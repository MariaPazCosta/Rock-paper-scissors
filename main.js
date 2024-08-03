function generateChoice(){
    let max = 4
    let min = 1
    let option = Math.floor(Math.random() * (max - min) + min)
    return option
}

// 1 es piedra, 2 es papel y 3 es tijeras
function showComputerChoice(choice){
    if(choice==1){
        alert("The computer choose rock")
    }else if(choice==2){
        alert("The computer choose paper")
    }else{
        alert("The computer choose scissors")
    }
}

function showPlayerChoice(){
    
}


let compChoice= generateChoice()
showComputerChoice(compChoice)
