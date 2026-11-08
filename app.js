/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let currentPlayer = 'X'

/*------------------------ Cached Element References ------------------------*/
const playerTurnMessageEl = document.querySelector('#message')
// const playerMarkEl = document.querySelectorAll('.sqr')
const sqr0El = document.getElementById('0')
const sqr1El = document.getElementById('1')
const sqr2El = document.getElementById('2')
const sqr3El = document.getElementById('3')
const sqr4El = document.getElementById('4')
const sqr5El = document.getElementById('5')
const sqr6El = document.getElementById('6')
const sqr7El = document.getElementById('7')
const sqr8El = document.getElementById('8')
//clg to test 
/*-------------------------------- Functions --------------------------------*/
playerTurnMessageEl.textContent = `It's ${currentPlayer}'s turn`


/*----------------------------- Event Listeners -----------------------------*/
///Event Listener - Player Mark XO when player clicks
sqr0El.addEventListener('click', () => {
    sqr0El.textContent = currentPlayer
})

sqr1El.addEventListener('click', () => {
    sqr1El.textContent = currentPlayer
})

sqr2El.addEventListener('click', () => {
    sqr2El.textContent = currentPlayer
})

sqr3El.addEventListener('click', () => {
    sqr3El.textContent = currentPlayer
})

sqr4El.addEventListener('click', () => {
    sqr4El.textContent = currentPlayer
})

sqr5El.addEventListener('click', () => {
    sqr5El.textContent = currentPlayer
})

sqr6El.addEventListener('click', () => {
    sqr6El.textContent = currentPlayer
})

sqr7El.addEventListener('click', () => {
    sqr7El.textContent = currentPlayer
})

sqr8El.addEventListener('click', () => {
    sqr8El.textContent = currentPlayer
})
