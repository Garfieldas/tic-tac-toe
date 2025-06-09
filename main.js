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

    const winCondition = [
        ['x', 'x', 'x'],
        ['', '', ''],
        ['', '', '']
    ]
    let playerChoice = prompt();
    const filtered = playerChoice.split(',');
    const [row, column, mark] = filtered;
    GameBoard.setMark(row, column, mark);

})();

console.log(GameBoard.getBoard())