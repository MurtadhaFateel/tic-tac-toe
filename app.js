/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

//Cahcing board square elements using class name 
const boardSqrElements = document.querySelectorAll('.sqr')
//Board Array of 9 empty strings
const board = ['', '', '', '', '', '', '', '', '']
//Player turn starts as X
let currentPlayerTurn = 'X'
//Winner condition starts as false until there is a winner
let winner = false 
//Tie condition starts a false until there is a tie
let tie = false 
//Cache player message turn using ID name 
const playerTurnMessage = document.querySelector('#message')



///Event Listener - Handle players clicks, update the board with X/O, track player turn/switch turns
//Loop through the board square elements and current index number
boardSqrElements.forEach((sqrElement, index) => {
    //Display current player turn by updating the message
    playerTurnMessage.textContent = `It's ${currentPlayerTurn}'s turn`
    //Listen for click action on current square element
    sqrElement.addEventListener('click', () => {
        //Update the board array with the current player turn upon a click (X/O)
        board[index] = currentPlayerTurn

        //If statment to check current player turn and update the boardSqrElements with value X or O
        if (currentPlayerTurn==='X') {
            sqrElement.append('X')
        } else {
            sqrElement.append('O')
        }

        //Switch Player turn (X always goes first from let currentPlayerTurn = 'X') check if current turn is X switch it to O and vice versa + update player turn message
        if(currentPlayerTurn==='X') {
            //Assign current player to O
            currentPlayerTurn='O'
            //Update text of H2 Message to current player turn 
            playerTurnMessage.textContent = `It's ${currentPlayerTurn}'s turn`
        } else {
            //Assign current player to X
            currentPlayerTurn='X'
            //Update text of H2 Message to current player turn 
            playerTurnMessage.textContent = `It's ${currentPlayerTurn}'s turn`
        }
    })
})

