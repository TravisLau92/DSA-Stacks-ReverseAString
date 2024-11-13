// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function reverseString(string) {
  // 1. Initiate empty stack
  const stack = [];

  // 2. Push all characters of the string onto the stack
  for (let char of string) {
    stack.push(char);
  }

  // 3. Pop all characters from the stack and build the reversed string
  let reversedString = '';
  while (stack.length > 0) {
    reverseString += stack.pop();
  }

  return reverseString;
}

const originalString = 'Hello';

console.log('Reversed String:', reverseString(originalString));