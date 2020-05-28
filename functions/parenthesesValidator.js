const inputCorrect = '( { 1 } [ 2 ] )';
const inputIncorrect = '( ( 3 ] ) }';

function parenthesesValidator(input) {
  let stack = 0;

  for (let item in input) {
    if (input[item] == '(' || input[item] == '{' || input[item] == '[') {
      stack++;
    } else if (input[item] == ')' || input[item] == '}' || input[item] == ']') {
      stack--;
    }

    if (stack < 0) return `Result: ${false}`;
  }

  if (stack > 0) return `Result: ${false}`;

  return `Result: ${true}`;
}

console.log(parenthesesValidator(inputCorrect));
console.log(parenthesesValidator(inputIncorrect));
