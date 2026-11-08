/*------------ Cached elements ------------*/
//Cahcing board square elements using class name 
const boardSqrElements = document.querySelectorAll('.sqr')
//Cache player message turn using ID name 
const playerTurnMessage = document.querySelector('#message')
//Cache Reset button
const resetBtn = document.querySelector('#reset')

/*------------ Variables ------------*/
//Board Array of 9 empty strings
let board = ['', '', '', '', '', '', '', '', '']
//Player turn starts as X
let currentPlayerTurn = 'X'
//Winner condition starts as false until there is a winner
let winner = false 
//Tie condition starts a false until there is a tie
let tie = false 

/*------------ Functions ------------*/
///Function - Loop through board array and update UI to match data
const boardRender = () => {
    board.forEach((mark, index) => {
        boardSqrElements[index].textContent = mark
    })
}

///Function - Game Reset 
const boardReset = () => {
    
    board = ['', '', '', '', '', '', '', '', '']
    currentPlayerTurn = 'X'
    winner = false 
    tie = false 
    boardRender()
    //Update text of H2 Message to current player turn 
    playerTurnMessage.textContent = `It's ${currentPlayerTurn}'s turn`
}

///Function - Check for Winner based on board position combinations 
const checkWinner = () => {
    //Check Top Row 
    if(board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
        playerTurnMessage.textContent = `${board[0]} wins!`
        winner = true
        return
    }
    //Check Middle row
    if(board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
        playerTurnMessage.textContent = `${board[3]} wins!` 
        winner = true
        return
    }
    //Check Bottom row
    if(board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
        playerTurnMessage.textContent = `${board[6]} wins!` 
        winner = true
        return  
    }
    //Check Left column
    if(board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
        playerTurnMessage.textContent = `${board[0]} wins!` 
        winner = true
        return 
    }
    //Check Middle column
    if(board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
        playerTurnMessage.textContent = `${board[1]} wins!`
        winner = true
        return
    }
    //Check Right column
    if(board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
        playerTurnMessage.textContent = `${board[2]} wins!`
        winner = true
        return
    }
    //Check Top-left to bottom-right diagonal
    if(board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
        playerTurnMessage.textContent = `${board[0]} wins!`
        winner = true
        return
    }
    //Check Top-right to bottom-left diagonal
    if(board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
        playerTurnMessage.textContent = `${board[2]} wins!`
        winner = true
        return
    }
}

///Function - Check for a tie where board postion is not empty
const checkTie = () => {
    if(board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '') {
        playerTurnMessage.textContent = 'Tie Game!'
        tie = true
        return
    }
}

//Display the initial current player turn (X turn) by updating the message 
playerTurnMessage.textContent = `It's ${currentPlayerTurn}'s turn`

/*------------ Event Listeners ------------*/
///Event Listener - Handle players clicks, update the board with X/O, track player turn/switch turns, check invalid moves, check win/tie game
//Loop through the board square elements and current index number
boardSqrElements.forEach((sqrElement, index) => {

    //Listen for click action on current square element
    sqrElement.addEventListener('click', () => {
        //Invalid move - check if selected position already contains a mark X/O or game is win/tie
        if(board[index] !== '' || winner === true || tie === true) {
            return
        }
        
        //Update the board array with the current player turn upon a click (X/O)
        board[index] = currentPlayerTurn
        
        //Check for a Winner function 
        checkWinner()

        //Check for a tie function 
        checkTie()
        
        //Switch Player turn (X always goes first from let currentPlayerTurn = 'X') check if current turn is X switch it to O and vice versa + update player turn message + check if there is no winner/tie
        if (winner === false && tie === false) {
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
        }

        //Invoke function - boardRender
        boardRender()
    })
})

///Event Listener - Reset Button 
resetBtn.addEventListener('click', (boardReset))

