// Game Board declaration
const gameBoard = (function () {
    let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Renders only the tiles for the game
    const render = function () {
        let html = "";
        board.forEach((val, idx) => {
            if (val == 0) {
                html += `<div class="tile" id="${idx}"></div>`
            } else {
                html += `<div class="tile" id="${idx}">${val}</div>`
            }
        });
        document.querySelector(".tile-container").innerHTML = html;
    }

    const reset = function () {
        board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    const getBoard = () => board;
    const getVal = (r, c) => board[r][c];
    const setVal = function (r, c, val) { 
        board[(r * 3) + c] = val;
    };
    const setVal1D = function (i, val) { 
        board[i] = val;
    };
    return { board, reset, render, getBoard, getVal, setVal, setVal1D };
})();

// Game State declaration
const gameState = (function () {
    let curPlayer = 0;                      // 0 = "O", 1 = "X"
    let players = [];
    let totalMoves = 0;

    // Player "constructor"
    const Player = function (name, marker) {
        return {name, marker};
    };

    // Handle player moves
    const handleClick = function (e) {
        console.log("CLICKED!");
        const idx = parseInt(e.target.id);
        const marker = players[curPlayer].marker;
        
        // Change values and render
        if (gameBoard.getBoard()[idx] !== "0") {
            gameBoard.setVal1D(idx, marker);
            switchPlayerTurn();
            totalMoves++;
            render();
        }

        // Checks for the winner
        const val = checkWinner();
        if (val) {
            switchPlayerTurn();
            showOverlay(`${players[curPlayer].name} won!`.toUpperCase());
            //setTimeout(() => alert(`${players[curPlayer].name} won!`), 500);
            document.querySelector("#close-overlay").addEventListener("click", () => {
                hideOverlay();
            });
        } else if (totalMoves === 9) {
            showOverlay(`Draw! Reset to try again.`.toUpperCase());
            //setTimeout(() => alert(`Draw! Reset to try again.`), 500);
            document.querySelector("#close-overlay").addEventListener("click", () => {
                hideOverlay();
            });
        }
    }

    // Renders everything on the page (including tiles with the gameBoard method)
    const render = function () {
        gameBoard.render();
        document.querySelector("#turn-indicator").textContent = `It is ${players[curPlayer].name}'s turn (${players[curPlayer].marker}).`.toUpperCase();

        document.querySelectorAll(".tile").forEach((tile) => {
            tile.addEventListener("click", handleClick);
        });
    }

    const reset = function () {
        gameBoard.reset();
        curPlayer = 0;
        totalMoves = 0;
        players = [];
        document.querySelector("#turn-indicator").textContent = "ENTER PLAYER NAMES...";
        document.querySelectorAll(".tile").forEach((tile) => tile.remove());
        document.querySelectorAll("input").forEach((input) => input.value = "");
    }
    
    // Function to start game
    const start = function() {
        // Create players
        const inputs = document.querySelectorAll("input");
        players = [Player(inputs[0].value, "O"), Player(inputs[1].value, "X")];

        // Sanity checks
        curPlayer = 0;
        gameBoard.reset();

        render();
    };

    const switchPlayerTurn = () => curPlayer = curPlayer ? 0 : 1;

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

        const board = gameBoard.getBoard();

        for (let combo of wins) {
            const [a, b, c] = combo;
            if (board[a] !== 0 && board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }
        }
        return 0;
    };

    // Utility functions to control the overlay after win/draw
    function showOverlay(message) {
        const overlay = document.querySelector("#overlay");
        const resultMessage = document.querySelector("#result-message");
        resultMessage.textContent = message;
        overlay.style.display = "flex";  
    }
    
    function hideOverlay() {
        const overlay = document.querySelector("#overlay");
        overlay.style.display = "none";
    }

    return {start, reset};
})();

// Start game/site up
const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Starting game...");
    gameState.start();
});

document.querySelector("#reset").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Resetting game...");
    gameState.reset();
});
