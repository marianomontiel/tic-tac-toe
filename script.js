const gameBoard = (() =>{
    const boardArray = ["o","o","o","o","x","o","o","o","o"]
    
    
    const boardGrid = document.createElement("div");
    boardGrid.style.display = "grid"
    boardGrid.style.gridTemplateColumns = "repeat(3, 60px)";
    boardGrid.style.gridTemplateRows = "repeat(3, 60px)";
    
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