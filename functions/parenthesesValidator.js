const inputCorrect = '(()())';
const inputIncorrect = '(()';

const parenthesesValidator = (input) => {
  let map = {
    ")": "("
  }

  let stack = [];

  for (let item = 0; item < input.length; item++) {
    if (input[item] === "(") {
      stack.push(input[item]);
    } else {
      if (stack[stack.length - 1] === map[input[item]]) {
        stack.pop();
      } else return `Result: ${false}`;
    }
  }

  return `Result: ${stack.length === 0 ? true : false}`;
}

console.log(parenthesesValidator(inputCorrect));
console.log(parenthesesValidator(inputIncorrect));
