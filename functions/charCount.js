const arrayData = [
  ['a', 'b', 'c'],
  ['a', 'f', 'g'],
  ['b']
];

const setChars = (data) => {
  let arrayOfData = [];

  for (array of data) {
    arrayOfData = arrayOfData.concat(array);
  }

  const setChars = arrayOfData.filter((value, index, self) => {
    return index == self.indexOf(value);
  });

  const countChars = (input, direction) => {
    if (direction === 'row') {
      return input.reduce((acc, curr) => {
        acc[curr] = acc[curr] ? ++acc[curr] : 1;
        return acc;
      }, {});
    }

    if (direction === 'column') {
      result = input.reduce((row, array) => {
        array.forEach((col, i) => {
          row[i] = row[i] || {};
          row[i][col] = (row[i][col] || 0) + 1;
        });
        return row;
      }, []);

      return result;
    }

    if (direction === 'diagonal') {

    }
  }

  console.log('Set of all characters used in all rows (set means without duplications):');
  console.log(setChars);
  console.log('');

  console.log('Total count of each used character:');
  console.log(countChars(arrayOfData, 'row'));
  console.log('');

  console.log('Total count of each character used in each row:');
  for (array of data) {
    console.log(countChars(array, 'row'));
  }
  console.log('');

  console.log('Total count of each character used in each column:');
  console.log(countChars(data, 'column'));
  console.log('');

  console.log('Total count of each character used in diagonals:');
  console.log(countChars(data, 'diagonal'));
  console.log('');

}

setChars(arrayData);
