const GameBoard = (function () {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const setMark = (row, column, symbol) => {
    if (board[row][column] === "") {
      board[row][column] = symbol;
    }
  };

  const getBoard = () => board;

  return { getBoard, setMark };
})();

const createPlayer = (name, score) => {
  return { name, score };
};

const GameController = (function () {
  const checkWin = (board) => {
    const size = board.length;

    for (let i = 0; i < size; i++) {
      if (
        board[i][0] !== "" &&
        board[i].every((cell) => cell === board[i][0])
      ) {
        return board[i][0];
      }
    }

    for (let j = 0; j < size; j++) {
      let column = [];
      for (let i = 0; i < size; i++) {
        column.push(board[i][j]);
      }
      if (column[0] !== "" && column.every((cell) => cell === column[0])) {
        return column[0];
      }
    }

    let mainDiagonal = [];
    for (let i = 0; i < size; i++) {
      mainDiagonal.push(board[i][i]);
    }
    if (
      mainDiagonal[0] !== "" &&
      mainDiagonal.every((cell) => cell === mainDiagonal[0])
    ) {
      return mainDiagonal[0];
    }

    const rightDiagonal = [];
    for (let i = 0; i < size; i++) {
      rightDiagonal.push(board[i][size - i - 1]);
    }
    if (
      rightDiagonal[0] !== "" &&
      rightDiagonal.every((cell) => cell === rightDiagonal[0])
    ) {
      return rightDiagonal[0];
    }

    return "no Winner";
  };

  return { checkWin };
})();

console.table(GameBoard.getBoard());

const round = GameController.checkWin(GameBoard.getBoard());
console.log("Winner:", round);
