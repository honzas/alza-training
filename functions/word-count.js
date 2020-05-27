const inputString = 'olly olly in come free';

const wordCounter = (input) => {
  const words = input.split(' ');

  const output = words.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1;
    return acc;
  }, {})

  console.log(output);
};

wordCounter(inputString);
