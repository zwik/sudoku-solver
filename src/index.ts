/* eslint-disable no-console */
const GRID_SIZE = 9;

const myBoard = [
  [7, 0, 2, 0, 5, 0, 6, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0],
  [1, 0, 0, 0, 0, 9, 5, 0, 0],
  [8, 0, 0, 0, 0, 0, 0, 9, 0],
  [0, 4, 3, 0, 0, 0, 7, 5, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 8],
  [0, 0, 9, 7, 0, 0, 0, 0, 5],
  [0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 7, 0, 4, 0, 2, 0, 3],
];

const isNumberInRow = (board: number[][], number: number, row: number): boolean => {
  for (let i = 0; i < GRID_SIZE; i += 1) {
    if (board[row][i] === number) {
      return true;
    }
  }
  return false;
};

const isNumberInColumn = (board: number[][], number: number, column: number): boolean => {
  for (let i = 0; i < GRID_SIZE; i += 1) {
    if (board[i][column] === number) {
      return true;
    }
  }
  return false;
};

const isNumberInBox = (board: number[][], number: number, row: number, column: number): boolean => {
  const localBoxRow = row - (row % 3);
  const localBoxColumn = column - (column % 3);

  for (let i = localBoxRow; i < localBoxRow + 3; i += 1) {
    for (let j = localBoxColumn; j < localBoxColumn + 3; j += 1) {
      if (board[i][j] === number) {
        return true;
      }
    }
  }
  return false;
};

const isValidPlacement = (board: number[][], number: number, row:number, column: number)
  :boolean => !isNumberInRow(board, number, row)
    && !isNumberInColumn(board, number, column)
    && !isNumberInBox(board, number, row, column);

const solveBoard = (board: number[][]) => {
  const internalBoard = board;

  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let column = 0; column < GRID_SIZE; column += 1) {
      if (board[row][column] === 0) {
        for (let numberToTry = 1; numberToTry <= GRID_SIZE; numberToTry += 1) {
          if (isValidPlacement(board, numberToTry, row, column)) {
            internalBoard[row][column] = numberToTry;

            if (solveBoard(board)) {
              return true;
            }
            internalBoard[row][column] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

const printBoard = (board: number[][]): void => {
  let line = '';
  for (let row = 0; row < GRID_SIZE; row += 1) {
    if (row % 3 === 0 && row !== 0) {
      console.log('-----------');
    }
    for (let column = 0; column < GRID_SIZE; column += 1) {
      if (column % 3 === 0 && column !== 0) {
        line += '|';
      }
      line += board[row][column];
    }
    console.log(line);
    line = '';
  }
};

printBoard(myBoard);

if (solveBoard(myBoard)) {
  console.log('Solved successfully');
} else {
  console.log('Unsolvable board :(');
}

printBoard(myBoard);
