let getComputerChoice = () => {   // returns a random choice for the computer
    const choices = ["Rock","Paper","Scissors"]; // array of choices
    const randomChoice = choices[Math.floor(Math.random()* choices.length)];  // generates a random item from choices
        return randomChoice;
}


let gameOfRPS = (playerChoice,computerChoice) => {  // one round of RPS
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice === computerChoice) return 0; // returns tie if both user and computer choose same
    if(playerChoice === "rock" && computerChoice ==="scissors"){
        return 1;
    }
    else if(playerChoice === "paper" && computerChoice === "rock"){
        return 1;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper"){
        return 1;
    }
    else{
        return -1;
    }
}


const playGame = () => {
    let score = 0;
    let playerChoice = "rock";
    for(let i=1;i<=3;i++){
        score += gameOfRPS(playerChoice,getComputerChoice());
    }

    if(score == 0) return "Tie";
    if(score > 0) 
        return "You win!";
    else
        return "Try Again!";
}

console.log(playGame());

// for(let i=0;i<10;i++)
// console.log(getComputerChoice());

