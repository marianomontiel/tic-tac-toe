const gameBoard = (() =>{
    const boardArray = []
    boardArray.length = 9
    
    const boardGrid = document.createElement("div");
    boardGrid.style.display = "grid"
    boardGrid.style.gridTemplateColumns = "repeat(3, 60px)";
    boardGrid.style.gridTemplateRows = "repeat(3, 60px)";
    
    for(let i=0; boardArray.length > i; i++){
        let mark = document.createElement("div");
        mark.id = i;

        mark.addEventListener("click", function (){
            if (mark.innerText === "X" || mark.innerText === "O") {
                console.log("A play has already been made there")
            } else {
                mark.innerText = "X";
                boardArray[i] = mark.textContent;
                console.log(boardArray);
            }
        })
        boardGrid.appendChild(mark);
    }


    const body = document.querySelector("body");
    const appendDiv= body.appendChild(boardGrid);

    

    return {boardArray, appendDiv};
})();

//this is in the works it intends to reset the game. It lacks the appnd function and prob something else I can't point out yet
const resetGame = (() => {
    gameBoard.boardArray;
    const resetButton = document.querySelector("#reset");
    resetButton.addEventListener("click", function() {
        for(let i = 0; boardArray.length < i; i++){
            boardArray[i] = "";
        }
    return {boardArray}
    })
})()

gameBoard.appendDiv;