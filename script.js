// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
function getComputerChoice() {
    const choices = ["Rock","Paper","Scissors"]; // array of choices
    const randomChoice = choices[Math.floor(Math.random()* choices.length)];  // generates a random item from choices
        return randomChoice;  
}


function getResult(playerChoice, computerChoice) {
  let score;
  // All situations where human draws, set `score` to 0
  if(playerChoice === computerChoice){ 
    score = 0;
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  
    else if(playerChoice === "Rock" && computerChoice ==="Scissors"){
        score = 1;
    }
    else if(playerChoice === "Paper" && computerChoice === "Rock"){
        score = 1;
    }
    else if(playerChoice === "Scissors" && computerChoice === "Paper"){
        score = 1;
    }
  // Otherwise human loses (aka set score to -1)
    else{
        score = -1;
    }
  // return score
    return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
    const resultDiv = document.getElementById('result');
    switch(score){
        case -1:
            resultDiv.innerText = "You Lose!";
            break;
        case 1:
            resultDiv.innerText = "You Win!!!";
            break;
        case 0:
            resultDiv.innerText = "It's a Draw!!";
            break;
    }
    let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  // Don't forget to grab the div with the 'result' id!
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice.value,computerChoice);
    showResult(score,playerChoice.value,computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
    let rpsButtons = document.querySelectorAll('.rpsButton');
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton);
    })
  // Add a click listener to the end game button that runs the endGame() function on click
    let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame();
}


// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById('player-score');
  let hands = document.getElementById('hands');
  let result = document.getElementById('result');
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
}

playGame();