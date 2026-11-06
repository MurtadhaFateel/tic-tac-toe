/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

//Cahcing board square elements
const boardSqrElements = document.querySelectorAll('.sqr')
//Board Array of 9 empty strings
const board = ['', '', '', '', '', '', '', '', '']
//Player turn starts as X
let currentPlayerTurn = 'X'
//Winner condition starts as false until there is a winner
let winner = false 
//Tie condition starts a false until there is a tie
let tie = false 
//Cache player message turn 
const playerTurnMessage = document.querySelector('#message')

//
boardSqrElements.forEach((sqrElement, index) => {
    sqrElement.addEventListener('click', () => {
        
        //Update the board array with the current player turn upon a click 
        board[index] = currentPlayerTurn

        //If statment to check current player turn and update the boardSqrElements with value X or O
        if (currentPlayerTurn==='X') {
            sqrElement.append('X')
        } else {
            sqrElement.append('O')
        }

        //Switch Player turn - X always goes first - check if current turn is X switch it to O and vice versa 
        if(currentPlayerTurn==='X') {
            currentPlayerTurn='O'
        } else {
            currentPlayerTurn='X'
        }
    })
})

