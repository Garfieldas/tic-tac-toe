const GameBoard = (function () {
  let board = [];

  const createBoard = () => {
    let gameBoard = document.querySelector("#board");
    let cell = gameBoard.children;
    board = [
      [cell[0], cell[1], cell[2]],
      [cell[3], cell[4], cell[5]],
      [cell[6], cell[7], cell[8]],
    ];
  };

  const setMark = (row, column, symbol) => {
    board[row][column].textContent = symbol;
  };

  const reset = () => {
    board.forEach((row) => {
      row.forEach((col) => {
        col.textContent = '';
      })
    })
    gameFlow.setupGame();
  }

  const getBoard = () => board;

  return { getBoard, setMark, createBoard, reset };
})();

const playerFactory = (function () {
  const createPlayer = (name, symbol) => ({
    name,
    symbol,
    makeMove(row, col) {
      GameBoard.setMark(row, col, symbol);
    },
  });

  return {
    createPlayer,
  };
})();

const GameController = (function () {
  const checkWin = (board) => {
    const size = board.length;

    for (let i = 0; i < size; i++) {
      if (
        board[i][0].textContent &&
        board[i].every((cell) => cell.textContent === board[i][0].textContent)
      ) return true;
    }

    for (let j = 0; j < size; j++) {
      const col = [board[0][j], board[1][j], board[2][j]];
      if (
        col[0].textContent &&
        col.every((cell) => cell.textContent === col[0].textContent)
      ) return true;
    }

    const diag1 = [board[0][0], board[1][1], board[2][2]];
    const diag2 = [board[0][2], board[1][1], board[2][0]];

    if (
      diag1[0].textContent &&
      diag1.every((cell) => cell.textContent === diag1[0].textContent)
    ) return true;

    if (
      diag2[0].textContent &&
      diag2.every((cell) => cell.textContent === diag2[0].textContent)
    ) return true;

    return false;
  };

  return { checkWin };
})();

const gameFlow = (function () {
  let player1, player2, currentPlayer, board;
  let isGameOver = false;

  const setupGame = () => {
    player1 = playerFactory.createPlayer("Player 1", "X");
    player2 = playerFactory.createPlayer("Player 2", "O");
    currentPlayer = player1;
    GameBoard.createBoard();
    board = GameBoard.getBoard();
    setupListeners();
    isGameOver = false;
  };

  const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const isBoardFull = () => {
    return board.flat().every((cell) => cell.textContent !== "");
  };

  const playTurn = (row, col) => {
    if (isGameOver || board[row][col].textContent !== "") return;

    currentPlayer.makeMove(row, col);

    if (GameController.checkWin(board)) {
      alert(`${currentPlayer.name} wins!`);
      isGameOver = true;
    } else if (isBoardFull()) {
      alert("It's a tie!");
      isGameOver = true;
    } else {
      switchTurn();
    }
  };

  const setupListeners = () => {
    board.forEach((row, i) =>
      row.forEach((cell, j) => {
        cell.addEventListener("click", () => playTurn(i, j));
      })
    );
  };

  return { setupGame };
})();

window.addEventListener("load", () => {
  gameFlow.setupGame();
  const resetBtn = document.querySelector('#restartButton');
  resetBtn.addEventListener('click', () => {
    GameBoard.reset();
  })
});
