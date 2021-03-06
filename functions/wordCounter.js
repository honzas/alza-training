const inputString = 'olly olly in come free';

const wordCounter = (input) => {
  const words = input.split(' ');

  const wordsObj = words.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? ++acc[curr] : 1;
    return acc;
  }, {});

  for (let [key, value] of Object.entries(wordsObj).sort()) {
    console.log((`${key}: ${value}`));
  }
};

wordCounter(inputString);
