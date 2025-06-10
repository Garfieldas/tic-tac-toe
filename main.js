const GameBoard = (function (boardSize = 3) {

  const board = [];

  const createBoard = () => {

    for (let i = 0; i < boardSize; i++){
      board[i] = [];
      for (let j = 0; j < boardSize; j++){
        board[i][j] = '';
      }
    }
  }

  const setMark = (row, column, symbol) => {
    if (board[row][column] === "") {
      board[row][column] = symbol;
    }
  };

  const getBoard = () => board;

  return { getBoard, setMark, createBoard };
})();

const playerFactory = (function (){

  const createPlayer = (name, symbol) => ({
    name,
    symbol,
    makeMove(row, col) {
      GameBoard.setMark(row,col,symbol);
    }
  });

  const askUser = () => {
    const name = prompt('Your name');
    const symbol = prompt('Enter your symbol')
    return createPlayer(name, symbol);
  };

  return {
    askUser
  }

})();

const GameController = (function () {
  const checkWin = (board) => {
    const size = board.length;

    for (let i = 0; i < size; i++) {
      if (
        board[i][0] !== "" &&
        board[i].every((cell) => cell === board[i][0])
      ) {
        return true;
      }
    }

    for (let j = 0; j < size; j++) {
      let column = [];
      for (let i = 0; i < size; i++) {
        column.push(board[i][j]);
      }
      if (column[0] !== "" && column.every((cell) => cell === column[0])) {
        return true;
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
      return true;
    }

    const rightDiagonal = [];
    for (let i = 0; i < size; i++) {
      rightDiagonal.push(board[i][size - i - 1]);
    }
    if (
      rightDiagonal[0] !== "" &&
      rightDiagonal.every((cell) => cell === rightDiagonal[0])
    ) {
      return true;
    }

    return false;
  };

  return { checkWin };
})();

const gameFlow = (function () {

  const player1 = playerFactory.askUser();
  const player2 = playerFactory.askUser();

  let isGameOver = false;
  let currentPlayer = player1;
  GameBoard.createBoard();
  const board = GameBoard.getBoard();

  const switchTurn = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const isBoardFull = () => {
    return board.flat().every((cell) => cell !== "");
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
    console.table(board);
    const winner = GameController.checkWin(board);

    if (winner) {
      console.log(`${currentPlayer.name} wins!`);
      isGameOver = true;
    } else if (isBoardFull()) {
      isGameOver = true;
      console.log("It's a tie");
    } else {
      switchTurn();
      console.log(`Next turn. Now goes ${currentPlayer.name}`);
    }
  };

  const play = () => {
    while (!isGameOver) {
      let choice = prompt();
      if (!choice) {
        console.log('Game is cancelled');
        break;
      }
      let trimmed = choice.split(",");
      let [row, col] = trimmed.map(Number);
      playTurn(row, col);
    }
  };

  return { play };
})();

gameFlow.play();

