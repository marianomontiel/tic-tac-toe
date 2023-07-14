const gameBoard = (() =>{
    const boardArray = ["x","x","x","o","x","o","x","o","x"]
    
    
    const boardGrid = document.createElement("div");
    boardGrid.style.display = "grid"
    boardGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
    boardGrid.style.gridTemplateRows = "repeat(3, 1fr)";
    
    for(let i=0; boardArray.length > i; i++){
        let mark = document.createElement("div");
        mark.innerText = boardArray[i];
        boardGrid.appendChild(mark);
    }
    const body = document.querySelector("body");
    const asd= body.appendChild(boardGrid);

    return {boardArray, asd};
})();

console.log(gameBoard.boardArray);
gameBoard.asd;