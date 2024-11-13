**Title: Implement a Stack to Reverse a String**

**Objective:**
Create a JavaScript function to reverse a string using a stack. The function should return the reversed string.

**Given the following input:**

```javascript
const originalString = "hello";

console.log("Reversed String:", reverseString(originalString));
```

For example, after implementing the `reverseString` function, you should be able to produce the following output:
```javascript
Reversed String: "olleh"
```

<details>
<summary>Hints</summary>

1. Define a function `reverseString(string)` that takes a string as input.
2. Use a stack (an array in JavaScript) to store the characters of the string.
3. Iterate through the string and push each character onto the stack.
4. Create a new string by popping characters from the stack and appending them, as the last character entered in the stack will be the first one to come out.
5. Continue until the stack is empty and return the new reversed string.

This method uses the LIFO (Last In, First Out) principle of a stack to reverse the order of characters in the string.

</details>

**Challenge:**

- Adapt the function to handle strings with various characters, including whitespace and punctuation.
- Test the function with different types of strings, such as palindromes or empty strings, to ensure it works in various scenarios.