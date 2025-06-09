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

const createPlayer = (name, symbol) => {
  return {
    name,
    symbol,
    makeMove(row, col) {
      GameBoard.setMark(row, col, symbol);
    },
  };
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

const gameFlow = (function () {
  const player1 = createPlayer("Player 1", "x");
  const player2 = createPlayer("Player 2", "o");
  const isGameOver = false;
  currentPlayer = player1;
  const board = GameBoard.getBoard();

  const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const playTurn = (row, col) => {
    if (isGameOver) {
      console.log("Game over");
      return;
    }

    if (board[row][col] !== "") {
      console.log("cell is already taken choose another one");
      return;
    }

  currentPlayer.makeMove(row, col);

  const winner = GameController.checkWin(board);

  if (winner) {
    console.log(`${currentPlayer} wins!`);
    isGameOver = true;
  } else {
    switchTurn();
    console.log(`Next turn. Now goes ${currentPlayer}`);
  }
}

return { playTurn };


})();
