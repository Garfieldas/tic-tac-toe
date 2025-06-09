const GameBoard = (function () {
    
    const board = [];
    const row = 3;
    const column = 3;

    for (let i = 0; i < row; i++){
        for (let j = 0; j < column; j++){
            board.push([i, j]);
        }
    }

    const getBoard = () => board;

    return { getBoard };

})();

const createPlayer = (name, score) => {
    return {
        name,
        score
    }
}

const GameController = (function () {

    

})();

console.log(GameBoard.getBoard())