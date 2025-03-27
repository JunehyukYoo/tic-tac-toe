// Game Board declaration
var begin = false;                      // Only begin once names have been inputed

const gameBoard = (function () {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    const render = function () {

        console.log("RENDER");
        let html = "";
        board.forEach((val, idx) => {
            if (val == 0) {
                html += `<div class="tile" id="${idx}"></div>`
            } else {
                html += `<div class="tile" id="${idx}">${val}</div>`
            }
        });
        document.querySelector(".container").innerHTML = html;
    }

    const reset = function () {
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
        // Define winning index combinations for a 3x3 board
        const wins = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Main diagonal
            [2, 4, 6]  // Anti-diagonal
        ];

        for (let combo of wins) {
            const [a, b, c] = combo;
            if (board[a] !== 0 && board[a] === board[b] && board[b] === board[c]) {
                finished = true;
                return board[a];
            }
        }

        return 0;
    };

    return {start, getPlayers, checkWinner};
})();

gameState.start();

