const GameBoard = (function () {


    const board = [["", "", ""],
    ["", "", ""],
    ["", "", ""]];

    const setMark = (row, column, symbol) => {
        if (board[row][column] === ''){
            board[row][column] = symbol;
        }
    }

    const getBoard = () => board;

    return { getBoard, setMark };

})();

const createPlayer = (name, score) => {
    return {
        name,
        score
    }
}

const GameController = (function () {

    GameBoard.setMark(0, 0, 'x')
    GameBoard.setMark(1, 0, 'x')
    GameBoard.setMark(2, 0, 'x')

})();

console.log(GameBoard.getBoard())