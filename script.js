const gameBoard = (() => {
    const boardArray = []
    boardArray.length = 9

    const boardGrid = document.createElement("div");
    boardGrid.style.display = "grid"
    boardGrid.style.gridTemplateColumns = "repeat(3, 60px)";
    boardGrid.style.gridTemplateRows = "repeat(3, 60px)";

    for (let i = 0; boardArray.length > i; i++) {
        let mark = document.createElement("div");
        mark.id = i;

        mark.addEventListener("click", function () {
            if (mark.innerText === "X" || mark.innerText === "O") {
                console.log("A play has already been made there")
            } else {
                mark.innerText = "X";
                boardArray[i] = mark.textContent;
                console.log(boardArray);
                computerPlayer();
            }
        })
        boardGrid.appendChild(mark);
    }


    const body = document.querySelector("body");
    const appendDiv = body.appendChild(boardGrid);



    return { boardArray, appendDiv };
})();

//this is in the works it intends to reset the game. It lacks the appnd function and prob something else I can't point out yet
const resetGame = (() => {
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function () {
        for (let i = 0; gameBoard.boardArray.length > i; i++) {
            const mark = document.getElementById(`${i}`);
            mark.innerText = "";
            gameBoard.boardArray[i] = "";
        }
    })
})()

const computerPlayer = (() => {
    let choice = Math.ceil(8 * Math.random())
    console.log(choice)
    const boardMark = document.getElementById(`${choice}`);

    if (boardMark.innerText === "") {
        boardMark.innerText = "O";
        gameBoard.boardArray[choice] = "O";
        whoWins();
    } else if (gameBoard.boardArray.every(cell => cell !== "")) {
        whoWins();
        return;
    } else {
        computerPlayer()
        return
    }
})

const whoWins = (() => {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (
                gameBoard.boardArray[i * 3] === player &&
                gameBoard.boardArray[i * 3 + 1] === player &&
                gameBoard.boardArray[i * 3 + 2] === player
            ) {
                return true;
            }
        }
    
        // Check columns
        for (let i = 0; i < 3; i++) {
            if (
                gameBoard.boardArray[i] === player &&
                gameBoard.boardArray[i + 3] === player &&
                gameBoard.boardArray[i + 6] === player
            ) {
                return true;
            }
        }
    
        // Check diagonals
        if (
            (gameBoard.boardArray[0] === player && gameBoard.boardArray[4] === player && gameBoard.boardArray[8] === player) ||
            (gameBoard.boardArray[2] === player && gameBoard.boardArray[4] === player && gameBoard.boardArray[6] === player)
        ) {
            return true;
        }
    
        return false;
        
    // Usage example
    const currentPlayer = "X"; // or "O"
    const isWinner = checkWinner(gameBoard.boardArray, currentPlayer);
    if (isWinner) {
        console.log(currentPlayer + " wins!");
    } else {
        console.log("No winner yet.");
    }
    
})