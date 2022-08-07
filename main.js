
//make a random choice generating function
//"getComputerChoice"
//make a single round function which takes 
//2 parameters "user" and "computer"
//and returns a string message
//
function getComputerChoice(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
    }

}

function playRound(playerSelection,computerSelection){

    if(playerSelection == "rock" && computerSelection == "scissor"){
        return "You Win! Rock beats scissor";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rocks";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rocks";
    }else if(playerSelection == "paper" && computerSelection == "scissor"){
        return "You Lose! Scissor beats Paper";
    }else if(playerSelection == "scissor" && computerSelection == "paper"){
        return "You Win! Scissor beats Paper";
    }else if(playerSelection == "scissor" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissor";
    }else{
        return "It's a Tie";
    }

}

function game(){
    
    for(let i = 0; i < 5 ; i++){
        let playerSelection = prompt("Choose: rock, paper or scissor","");
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
        
        

    }
}