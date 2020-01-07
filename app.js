// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3

//UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message')

//Assign UI min and max
minNum.textContent = min
maxNum.textContent = max

// Listen for guess
guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value)
  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }
  //Check if won
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`)
    // guessInput.disabled = true
    // guessInput.style.borderColor = 'green'
    // setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
  } else {
    guessesLeft -= 1
    if(guessesLeft === 0) {
      gameOver(false, `${winningNum} was correct, GAME OVER!`)
    } else {
      guessInput.value = ''
      guessInput.style.borderColor = 'red'
      setMessage(`${guess} in not correct, ${guessesLeft} guesses left`, 'red')
    }
  }
})

function gameOver(won, msg) {
  let color
  won === true ? color = 'green' : color = 'red'
  guessInput.disabled = true
  guessInput.style.borderColor = color
  setMessage(msg, color)
}

function setMessage(msg, color) {
  message.style.color = color
  message.textContent = msg
}
