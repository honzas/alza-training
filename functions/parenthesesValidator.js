const inputCorrect = '(()())';
const inputIncorrect = '(()';

const parenthesesValidator = (input) => {
  const regex = /(\(|\))/g;

  const parens = input.match(regex);

  let map = {
    ")": "("
  }

  let stack = [];

  for (let item = 0; item < parens.length; item++) {
    if (parens[item] === "(") {
      stack.push(parens[item]);
    } else {
      if (stack[stack.length - 1] === map[parens[item]]) {
        stack.pop();
      } else return `Result: ${false}`;
    }
  }

  return `Result: ${stack.length === 0 ? true : false}`;
}

console.log(parenthesesValidator(inputCorrect));
console.log(parenthesesValidator(inputIncorrect));
