let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates new secret number each round
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
}

//determines which guess is closest to target num
const compareGuesses = (userGuess, compGuess, targetNum) => {
  let userDifference = Math.abs(targetNum - userGuess)
  let compDifference = Math.abs(targetNum - compGuess)
  if( userDifference === compDifference) {
    return true;
  }else if(userDifference < compDifference) {
    return true;
  }else if(userDifference > compDifference) {
    return false;
  }else if(userGuess < 0 || userGuess > 9) {
      return 'Invalid guess';
  }
}

//increase the winner's score after each round
const updateScore = theWinner => {
  if(theWinner === 'human') {
    humanScore + 1;
  }else if(theWinner === 'computer') {
    computerScore + 1;
  }
}

//update the round num after each round
function advanceRound() {
  return currentRoundNumber = currentRoundNumber + 1
}