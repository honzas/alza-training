const data = [
  [0, 0, '*'],
  ['*', 0, 0],
  [0, '*', 0]
];

const mineSweeper = (input) => {

  const countFunc = (input, row, col) => {
    const rows = [prevRow = input[row - 1], currentRow = input[row], nextRow = input[row + 1]];
    let count = 0;

    rows.forEach(arr => {
      if (arr) {
        if (arr[col - 1] == '*' || arr[col] == '*' || arr[col + 1] == '*') {
          count++;
        }
      }
    });

    return count;
  }

  return input.map((a, row) => {
    return a.map((b, col) => {
      return b == '*' ? b : countFunc(input, row, col);
    });
  });

}

console.log(mineSweeper(data));
