// *** Question 1 *** ///
`Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223`;
function reverseNumber(num) {
  // Convert the number to a string, split it into an array of characters, reverse the array, and join it back into a string
  const reversedString = num.toString().split("").reverse().join("");
  // Convert the reversed string back to a number
  return parseInt(reversedString, 10);
}

// Example usage:
const x = 32243;
const reversedX = reverseNumber(x);
console.log("Original number:", x);
console.log("Reversed number:", reversedX);

// *** Question 2 *** ///
`Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.`;
function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Compare characters from the beginning and end of the string inward
  for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      // If characters don't match, it's not a palindrome
      return false;
    }
  }
  // If all characters match, it's a palindrome
  return true;
}
// Example usage:
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("nurses run")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// *** Question 3 *** ///
`Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g`;
function generateCombinations(str) {
  const result = [];
  // Iterate through each character of the string
  for (let i = 0; i < str.length; i++) {
    // Create substrings starting from the current character
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.substring(i, j));
    }
  }
  return result;
}
// Example usage:
const inputString = "dog";
const combinations = generateCombinations(inputString);
console.log("Combinations:", combinations);

// *** Question 4 *** ///
`Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.`;
function sortStringAlphabetically(str) {
    // Convert the string to an array of characters, sort the array alphabetically, and then join it back into a string
    return str.split('').sort().join('');
}

// Example usage:
const inputString = 'webmaster';
const sortedString = sortStringAlphabetically(inputString);
console.log("Original string:", inputString);
console.log("Sorted string:", sortedString);
