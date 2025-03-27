// Game Board declaration
const gameBoard = (function () {
    let board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    const render = function () {
        console.log("RENDER");
    }
    const reset = function () {
        board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
    }
    const getBoard = () => board;
    const getVal = (r, c) => board[r][c];
    const setVal = function (r, c, val) { 
        board[r][c] = val;
        render();
    };
    return { board, reset, render, getBoard, getVal, setVal };
})();

// Game State declaration
const gameState = (function () {
    let finished = false;
    let curPlayer = 0;                      // 0 = "O", 1 = "X"
    let winner = null;
    let players = [];

    // Player "constructor"
    const Player = function (name, marker) {
        return {name, marker};
    };

    const getPlayers = () => players;
    
    // Function to start game
    const start = function() {
        players = [Player("temp", "O"), Player("tempAgain", "X")];
        // Sanity checks
        winner = null;
        finished = false;
        curPlayer = 0;

        gameBoard.reset();
        gameBoard.render();
    };

    // Function to manually check each row/col/diagonal
    // for a winner. Runs in O(1) space for a 3x3 board and
    // O(n) space for a nxn board.
    const checkWinner = function() {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                finished = true;
                return board[i][0];
            }
        }

        // Check cols
        for (let i = 0; i < 3; i++) {
            if (board[0][i] !== 0 && board[0][i] === board[1][i] && board[i][1] === board[2][i]) {
                finished = true;
                return board[i][0];
            }
        }

        // Check diags
        if (board[0][0] !== 0 &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]) {
                finished = true;
                return board[0][0];
        }
        
        if (board[0][2] !== 0 &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]) {
                finished = true;
                return board[0][2];
        }

        // If there is no winner yet
        return 0;
    };

    return {start, getPlayers, checkWinner};
})();

gameState.start();

