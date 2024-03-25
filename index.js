`{1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 }`;

// Get current date and time
const currentDate = new Date();

// Array of days of the week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get day of the week
const dayOfWeek = daysOfWeek[currentDate.getDay()];

// Get hours, minutes, and seconds
let hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Convert hours to AM/PM format
const amOrPm = hours >= 12 ? "PM" : "AM";

// Convert hours to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // 12-hour clock, so 0 becomes 12

// Format minutes and seconds to have leading zeros if less than 10
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

// Display the current day and time
console.log(`Today is: ${dayOfWeek}`);
console.log(
  `Current time is: ${hours} ${amOrPm} : ${formattedMinutes} : ${formattedSeconds}`
);

// *** 2nd Question *** //
`Write a JavaScript program to print the current window contents.`;

window.print();

// *** 3rd Question *** //
`Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy` // *** 4th Question *** // // console.log(`dd/mm/yyyy: ${ddmmyyyy_slash}`); // console.log(`dd-mm-yyyy: ${ddmmyyyy}`); // console.log(`mm/dd/yyyy: ${mmddyyyy_slash}`); // console.log(`mm-dd-yyyy: ${mmddyyyy}`); // // Output the results // const ddmmyyyy_slash = `${addLeadingZero(day)}/${addLeadingZero(month)}/${year}`; // // Format the date in dd/mm/yyyy format // const ddmmyyyy = `${addLeadingZero(day)}-${addLeadingZero(month)}-${year}`; // // Format the date in dd-mm-yyyy format // const mmddyyyy_slash = `${addLeadingZero(month)}/${addLeadingZero(day)}/${year}`; // // Format the date in mm/dd/yyyy format // const mmddyyyy = `${addLeadingZero(month)}-${addLeadingZero(day)}-${year}`; // // Format the date in mm-dd-yyyy format // } //   return number < 10 ? '0' + number : number; // function addLeadingZero(number) { // // Function to add leading zeros if necessary // const year = currentDate.getFullYear(); // const month = currentDate.getMonth() + 1; // Months are zero-based // const day = currentDate.getDate(); // // Get the day, month, and year // const currentDate = new Date(); // // Get current date
`Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.`;

// Function to calculate the area of a triangle using Heron's formula
function calculateTriangleArea(side1, side2, side3) {
  // Calculate the semi-perimeter
  const s = (side1 + side2 + side3) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

  return area;
}

// Given side lengths of the triangle
const side1 = 5;
const side2 = 6;
const side3 = 7;

// Calculate the area of the triangle
const area = calculateTriangleArea(side1, side2, side3);

// Output the result
console.log("Area of the triangle:", area.toFixed(2));

// *** 5th Question *** //
`Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front. `;
function rotateStringRight(str) {
  // Convert the string to an array of characters
  let chars = str.split("");

  // Rotate the string
  const lastChar = chars.pop(); // Remove the last character
  chars.unshift(lastChar); // Add the last character to the beginning

  // Convert the array back to a string
  const rotatedString = chars.join("");

  return rotatedString;
}

// Original string
const originalString = "w3resource";

// Rotate the string
const rotatedString = rotateStringRight(originalString);

// Output the rotated string
console.log(rotatedString); // Output: ew3resourc

// *** 6th Question *** //
`Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. `;
function isLeapYear(year) {
  // Check if the year is divisible by 4
  const divisibleBy4 = year % 4 === 0;

  // Check if the year is divisible by 100
  const divisibleBy100 = year % 100 === 0;

  // Check if the year is divisible by 400
  const divisibleBy400 = year % 400 === 0;

  // Determine if it's a leap year
  if ((divisibleBy4 && !divisibleBy100) || divisibleBy400) {
    return true;
  } else {
    return false;
  }
}

// Test cases
const year1 = 2020;
const year2 = 1900;
const year3 = 2000;

// Check if the years are leap years
console.log(year1 + " is a leap year: " + isLeapYear(year1)); // Output: true
console.log(year2 + " is a leap year: " + isLeapYear(year2)); // Output: false
console.log(year3 + " is a leap year: " + isLeapYear(year3)); // Output: true

// *** 7th Question *** //
`Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  `;
function isFirstJanuarySunday(startYear, endYear) {
  for (let year = startYear; year <= endYear; year++) {
    // Create a new Date object for January 1st of the current year
    const januaryFirst = new Date(year, 0, 1);

    // Check if January 1st is a Sunday (getDay() returns 0 for Sunday)
    if (januaryFirst.getDay() === 0) {
      console.log("January 1st, " + year + " is a Sunday.");
    }
  }
}

// Define the range of years
const startYear = 2014;
const endYear = 2050;

// Check if January 1st is a Sunday for each year in the range
isFirstJanuarySunday(startYear, endYear);

// *** 8th Question *** //
`Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  `;
// Generate a random integer between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to input a guess
const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));

// Check if the user's guess matches the random number
if (userGuess === randomNumber) {
  console.log("Good Work!");
} else {
  console.log("Not matched. The correct number was " + randomNumber + ".");
}

// *** 9th Question *** //
`Write a JavaScript program to calculate the days left before Christmas.`;
function daysUntilChristmas() {
  // Get the current date
  const today = new Date();

  // Get the current year
  const currentYear = today.getFullYear();

  // Calculate Christmas day of the current year
  const christmasDay = new Date(currentYear, 11, 25); // Month is zero-based, so 11 represents December

  // Check if Christmas has already passed for this year
  if (today > christmasDay) {
    // Christmas has passed for this year, calculate for next year
    christmasDay.setFullYear(currentYear + 1);
  }

  // Calculate the difference in days between today and Christmas
  const differenceInTime = christmasDay.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

// Call the function and output the result
const daysLeft = daysUntilChristmas();
console.log("Days left until Christmas:", daysLeft);

// *** 10th Question *** //
`Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).`;
`<!DOCTYPE html>
<html> 
<head>
<meta charset=utf-8 />
<title>JavaScript program to calculate multiplication and division of two numbers </title>
<style type="text/css">
body {margin: 30px;}
</style> 
</head>
<body>
<form>
1st Number : <input type="text" id="firstNumber" /><br>
2nd Number: <input type="text" id="secondNumber" /><br>
<input type="button" onClick="multiplyBy()" Value="Multiply" />
<input type="button" onClick="divideBy()" Value="Divide" />
</form>
<p>The Result is : <br>
<span id = "result"></span>
</p>
</body>
<script>
// Define a function to multiply two numbers and display the result
function multiplyBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    // Set the inner HTML of the element with the id "result" to the product of the two numbers
    document.getElementById("result").innerHTML = num1 * num2;
}

// Define a function to divide two numbers and display the result
function divideBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
    document.getElementById("result").innerHTML = num1 / num2;
} 
</script>
</html>` // *** 11th Question *** //
`Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C`;

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Example temperatures
const celsiusTemp = 60;
const fahrenheitTemp = 45;

// Convert Celsius to Fahrenheit
const fahrenheitResult = celsiusToFahrenheit(celsiusTemp);
console.log(celsiusTemp + "°C is " + fahrenheitResult.toFixed(2) + "°F");

// Convert Fahrenheit to Celsius
const celsiusResult = fahrenheitToCelsius(fahrenheitTemp);
console.log(fahrenheitTemp + "°F is " + celsiusResult.toFixed(2) + "°C");

// *** 12th Question *** //
`Write a JavaScript program to get the website URL (loading page).`;
// Get the website URL
const currentURL = window.location.href;

// Output the website URL
console.log("Website URL:", currentURL);

// *** 13th Question *** //
`Write a JavaScript exercise to create a variable using a user-defined name. `;
// Function to create a variable with a user-defined name
function createVariable(name, value) {
  // Create an empty object
  const obj = {};

  // Add a property to the object with the user-defined name
  obj[name] = value;

  // Return the object
  return obj;
}

// Ask user for variable name and value
const variableName = prompt("Enter variable name:");
const variableValue = prompt("Enter variable value:");

// Create a variable with the user-defined name and value
const userDefinedVariable = createVariable(variableName, variableValue);

// Output the created variable
console.log("User-defined variable:", userDefinedVariable);

// *** 14th Question *** //
`Write a JavaScript exercise to get the filename extension.`;
function getFileExtension(filename) {
  // Split the filename by periods to get an array of parts
  const parts = filename.split(".");

  // If the filename has only one part or ends with a period, it has no extension
  if (
    parts.length === 1 ||
    (parts[parts.length - 1] === "" && parts.length === 2)
  ) {
    return "No extension found";
  }

  // Otherwise, the extension is the last part of the filename
  return parts[parts.length - 1];
}

// Test cases
console.log(getFileExtension("example.txt")); // Output: txt
console.log(getFileExtension("script.js")); // Output: js
console.log(getFileExtension("image.jpeg")); // Output: jpeg
console.log(getFileExtension("document")); // Output: No extension found
console.log(getFileExtension("backup.")); // Output: No extension found

// *** 15th Question *** //
`Write a JavaScript program to get the difference between a given number and 13,
 if the number is broader than 13 return double the absolute difference.`;
function differenceFrom13(number) {
  const difference = Math.abs(number - 13);

  if (number > 13) {
    return difference * 2;
  } else {
    return difference;
  }
}

// Test cases
console.log(differenceFrom13(5)); // Output: 8
console.log(differenceFrom13(13)); // Output: 0
console.log(differenceFrom13(20)); // Output: 14 (double the absolute difference: 7 * 2)

// *** 16th Question *** //
`Write a JavaScript program to compute the sum of the two given integers.
 If the two values are the same, then return triple their sum.`;
function sumOrTripleSum(num1, num2) {
  const sum = num1 + num2;

  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}

// Test cases
console.log(sumOrTripleSum(3, 5)); // Output: 8
console.log(sumOrTripleSum(3, 3)); // Output: 18 (triple their sum: 6 * 3)
console.log(sumOrTripleSum(7, 7)); // Output: 42 (triple their sum: 14 * 3)

// *** 17th Question *** //
`Write a JavaScript program to compute the absolute difference between a specified number and 19.
Returns triple the absolute difference if the specified number is greater than 19.`;
function absoluteDifference(number) {
  const diff = Math.abs(number - 19);

  if (number > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}

// Test cases
console.log(absoluteDifference(5)); // Output: 14
console.log(absoluteDifference(19)); // Output: 0
console.log(absoluteDifference(25)); // Output: 18 (triple the absolute difference: 6 * 3)

// *** 18th Question *** //
`Write a JavaScript program to check a pair of numbers and return 
true if one of the numbers is 50 or if their sum is 50.`;
function checkFor50(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

// Test cases
console.log(checkFor50(25, 25)); // Output: true (sum is 50)
console.log(checkFor50(50, 10)); // Output: true (one of the numbers is 50)
console.log(checkFor50(20, 30)); // Output: true (sum is 50)
console.log(checkFor50(15, 35)); // Output: true (sum is 50)
console.log(checkFor50(40, 10)); // Output: false (neither number is 50 and sum is not 50)

// *** 19th Question *** //
`Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.`;
function isWithin20(num) {
  return Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20;
}

// Test cases
console.log(isWithin20(80)); // Output: true (within 20 of 100)
console.log(isWithin20(90)); // Output: true (within 20 of 100)
console.log(isWithin20(100)); // Output: true (within 20 of 100)
console.log(isWithin20(120)); // Output: false (not within 20 of 100 or 400)
console.log(isWithin20(380)); // Output: true (within 20 of 400)
console.log(isWithin20(400)); // Output: true (within 20 of 400)
console.log(isWithin20(420)); // Output: false (not within 20 of 100 or 400)

// *** 20th Question *** //
`Write a JavaScript program to check two given integers whether one is positive and another one is negative.`;
function checkPositiveNegative(num1, num2) {
  return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0);
}

// Test cases
console.log(checkPositiveNegative(5, -10)); // Output: true (5 is positive, -10 is negative)
console.log(checkPositiveNegative(-5, 10)); // Output: true (-5 is negative, 10 is positive)
console.log(checkPositiveNegative(5, 10)); // Output: false (both are positive)
console.log(checkPositiveNegative(-5, -10)); // Output: false (both are negative)
console.log(checkPositiveNegative(0, 10)); // Output: false (0 is neither positive nor negative)
console.log(checkPositiveNegative(0, 0)); // Output: false (both are zero)

// *** 21th Question *** //
`Write a JavaScript program to create another string by adding "Py" in front of a given string. 
If the given string begins with "Py" return the original string. `;
function addPy(str) {
  // Check if the string begins with "Py"
  if (str.startsWith("Py")) {
    return str; // Return the original string
  } else {
    return "Py" + str; // Add "Py" in front of the string
  }
}

// Test cases
console.log(addPy("thon")); // Output: "Python" (added "Py" in front)
console.log(addPy("Pyramid")); // Output: "Pyramid" (already begins with "Py")
console.log(addPy("thonic")); // Output: "Pythonic" (added "Py" in front)

// *** 22th Question *** //
`Write a JavaScript program to remove a character
at the specified position in a given string and return the modified string.`;
function removeCharacter(str, index) {
  // Check if the index is within the range of the string
  if (index < 0 || index >= str.length) {
    return "Invalid index"; // Return error message if index is out of range
  }

  // Remove the character at the specified index
  const modifiedString = str.slice(0, index) + str.slice(index + 1);

  return modifiedString;
}

// Test cases
console.log(removeCharacter("Hello", 2)); // Output: "Helo" (removed character at index 2)
console.log(removeCharacter("world", 0)); // Output: "orld" (removed character at index 0)
console.log(removeCharacter("world", 5)); // Output: "Invalid index" (index is out of range)

// *** 23th Question *** //
`Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. 
The string length must be broader than or equal to 1.`;
function changePosition(str) {
  // Check if the string length is greater than or equal to 1
  if (str.length < 1) {
    return "String length must be greater than or equal to 1";
  }

  // Extract the first character
  const firstChar = str.charAt(0);

  // Extract the last character
  const lastChar = str.charAt(str.length - 1);

  // Replace the first character with the last character and vice versa
  const modifiedString = lastChar + str.slice(1, -1) + firstChar;

  return modifiedString;
}

// Test cases
console.log(changePosition("hello")); // Output: "oellh" (changed position of first and last characters)
console.log(changePosition("world")); // Output: "dorlw" (changed position of first and last characters)
console.log(changePosition("a")); // Output: "a" (string length is 1, no change in position)
console.log(changePosition("")); // Output: "String length must be greater than or equal to 1" (string length is 0, error message)

// *** 24th Question *** //
`Write a JavaScript program to create another string from a given string with 
the first character of the given string added to the front and back. `;
function addFirstCharacterToFrontAndBack(str) {
  // Check if the string is not empty
  if (str.length === 0) {
    return "String cannot be empty";
  }

  // Get the first character of the string
  const firstChar = str.charAt(0);

  // Add the first character to the front and back of the string
  const modifiedString = firstChar + str + firstChar;

  return modifiedString;
}

// Test cases
console.log(addFirstCharacterToFrontAndBack("hello")); // Output: "hhelloh" (added 'h' to front and back)
console.log(addFirstCharacterToFrontAndBack("world")); // Output: "wworldw" (added 'w' to front and back)
console.log(addFirstCharacterToFrontAndBack("a")); // Output: "aaa" (string length is 1, 'a' added to front and back)
console.log(addFirstCharacterToFrontAndBack("")); // Output: "String cannot be empty" (string is empty, error message)

// *** 25th Question *** //
`Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.`;
function isMultipleOf3Or7(number) {
  // Check if the number is positive and divisible by 3 or 7
  return number > 0 && (number % 3 === 0 || number % 7 === 0);
}

// Test cases
console.log(isMultipleOf3Or7(9)); // Output: true (9 is a multiple of 3)
console.log(isMultipleOf3Or7(14)); // Output: true (14 is a multiple of 7)
console.log(isMultipleOf3Or7(21)); // Output: true (21 is a multiple of both 3 and 7)
console.log(isMultipleOf3Or7(5)); // Output: false (5 is not a multiple of 3 or 7)
console.log(isMultipleOf3Or7(-7)); // Output: false (-7 is not positive)
console.log(isMultipleOf3Or7(0)); // Output: false (0 is not positive)

// *** 26th Question *** //
`Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters 
and adding them at both the front and back. The string length must be 3 or more.`;
function createString(str) {
  // Check if the string length is 3 or more
  if (str.length < 3) {
    return "String length must be 3 or more";
  }

  // Get the last 3 characters of the string
  const lastThreeChars = str.slice(-3);

  // Create the new string by adding the last 3 characters to both the front and back
  const newString = lastThreeChars + str + lastThreeChars;

  return newString;
}

// Test cases
console.log(createString("hello")); // Output: "lohelloworldlo"
console.log(createString("world")); // Output: "ldworldrld"
console.log(createString("test")); // Output: "esttestest"
console.log(createString("a")); // Output: "String length must be 3 or more" (string length is less than 3)
console.log(createString("ab")); // Output: "String length must be 3 or more" (string length is less than 3)

// *** 27th Question *** //
`Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.`;
function startsWithJava(str) {
  // Check if the string starts with 'Java'
  if (str.startsWith("Java")) {
    return true;
  } else {
    return false;
  }
}

// Test cases
console.log(startsWithJava("JavaScript")); // Output: false
console.log(startsWithJava("Java is fun")); // Output: true
console.log(startsWithJava("Java")); // Output: true
console.log(startsWithJava("python")); // Output: false
console.log(startsWithJava("java")); // Output: false (case-sensitive)

// *** 28th Question *** //
`Write a JavaScript program to check whether two given integer values are in the range 50..99 
(inclusive). Return true if either of them falls within the range. `;
function isInRange50to99(num1, num2) {
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// Test cases
console.log(isInRange50to99(55, 70)); // Output: true (55 falls within the range)
console.log(isInRange50to99(40, 80)); // Output: true (80 falls within the range)
console.log(isInRange50to99(30, 40)); // Output: false (both are outside the range)
console.log(isInRange50to99(60, 100)); // Output: true (60 falls within the range)
console.log(isInRange50to99(20, 99)); // Output: true (99 falls within the range)

// *** 29th Question *** //
`Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive).
Return true if one or more of them are in the specified range.`;
function isInRange50to99(num1, num2, num3) {
  return (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  );
}

// Test cases
console.log(isInRange50to99(55, 70, 80)); // Output: true (55 falls within the range)
console.log(isInRange50to99(40, 80, 90)); // Output: true (80 falls within the range)
console.log(isInRange50to99(30, 40, 100)); // Output: false (all are outside the range)
console.log(isInRange50to99(60, 100, 120)); // Output: true (60 falls within the range)
console.log(isInRange50to99(20, 99, 110)); // Output: true (99 falls within the range)

// *** 30th Question *** //
`Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, 
return the string without "Script" otherwise return the original one.`;
function checkAndRemoveScript(str) {
  // Check if "Script" appears at the 5th position (index 4) in the string
  if (str.length >= 5 && str.substring(4, 10) === "Script") {
    // If "Script" appears, remove it and return the modified string
    return str.substring(0, 4) + str.substring(10);
  } else {
    // If "Script" does not appear, return the original string
    return str;
  }
}

// Test cases
console.log(checkAndRemoveScript("JavaScript")); // Output: "Java"
console.log(checkAndRemoveScript("Python")); // Output: "Python"
console.log(checkAndRemoveScript("MyScriptApp")); // Output: "MyApp"
console.log(checkAndRemoveScript("MyAppScript")); // Output: "MyAppScript" (no "Script" at the 5th position)
console.log(checkAndRemoveScript("Scr")); // Output: "Scr" (string length is less than 5)

// *** 31th Question *** //
`Write a JavaScript program to find the largest of three given integers.  `;
function largest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(largest(2, 4, 7));

// *** 32th Question *** //
`Write a JavaScript program to find the closest value to 100 from two numerical values.`;
function closestTo100(num1, num2) {
  const target = 100;

  // Calculate the absolute differences between each number and the target
  const diff1 = Math.abs(target - num1);
  const diff2 = Math.abs(target - num2);

  // Compare the differences to find the closest value
  if (diff1 < diff2) {
    return num1;
  } else if (diff2 < diff1) {
    return num2;
  } else {
    // If differences are equal, return either number
    return num1;
  }
}

// Example usage:
const value1 = 90;
const value2 = 105;
const closest = closestTo100(value1, value2);
console.log("The closest value to 100 is:", closest);

// *** 33th Question *** //
`Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive`;
function checkRanges(num1, num2) {
  // Define the ranges
  const range1 = { min: 40, max: 60 };
  const range2 = { min: 70, max: 100 };

  // Check if both numbers fall within any of the specified ranges
  const inRange1 = num1 >= range1.min && num1 <= range1.max;
  const inRange2 = num2 >= range1.min && num2 <= range1.max;
  const inRange3 = num1 >= range2.min && num1 <= range2.max;
  const inRange4 = num2 >= range2.min && num2 <= range2.max;

  // Return true if either pair of numbers falls within the specified ranges, otherwise false
  return (inRange1 && inRange2) || (inRange3 && inRange4);
}

// Example usage:
const num1 = 45;
const num2 = 80;
const result = checkRanges(num1, num2);
console.log("Are the two numbers within the specified ranges?", result);

// *** 34th Question *** //
`Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. `;
function findLargest(num1, num2) {
  // Check if both numbers are within the specified range
  if (num1 < 40 || num1 > 60 || num2 < 40 || num2 > 60) {
    return "Numbers must be within the range 40..60 inclusive.";
  }

  // Compare the two numbers to find the largest one
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Example usage:
const num1 = 55;
const num2 = 47;
const largest = findLargest(num1, num2);
console.log("The largest number is:", largest);

// *** 35th Question *** //
`Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.`;

function characterExists(str, char) {
  // Check if the string length is at least 4 characters
  if (str.length < 4) {
    return false; // Character cannot exist between 2nd and 4th positions if string is less than 4 characters
  }

  // Extract substring from the 2nd to 4th positions (indexes 1 to 3)
  const substring = str.substring(1, 4);

  // Check if the specified character exists in the substring
  return substring.includes(char);
}

// Example usage:
const inputString = "example";
const specifiedChar = "a";
const exists = characterExists(inputString, specifiedChar);
console.log(
  `Does '${specifiedChar}' exist between 2nd and 4th positions in '${inputString}'?`,
  exists
);

// *** 36th Question *** //
`Write a JavaScript program that checks whether the last digit of three positive integers is the same.`;
function lastDigitSame(num1, num2, num3) {
  // Get the last digit of each number
  const lastDigit1 = num1 % 10;
  const lastDigit2 = num2 % 10;
  const lastDigit3 = num3 % 10;

  // Check if all last digits are the same
  return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
}

console.log(lastDigitsSame(120, 230, 440));

// *** 37th Question *** //
`Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case. `;
function manipulateString(inputString) {
  if (inputString.length < 3) {
    // If the string length is less than 3, convert all characters to upper case
    return inputString.toUpperCase();
  } else {
    // Otherwise, extract the first 3 characters and convert them to lower case
    const firstThreeLowerCase = inputString.substring(0, 3).toLowerCase();
    // Concatenate the lowercase characters with the remaining characters
    return firstThreeLowerCase + inputString.substring(3);
  }
}

// Example usage:
const input1 = "example";
const input2 = "Hi";
const manipulatedString1 = manipulateString(input1);
const manipulatedString2 = manipulateString(input2);
console.log("Manipulated string 1:", manipulatedString1);
console.log("Manipulated string 2:", manipulatedString2);

// *** 38th Question *** //
`Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. The grading criteria are as follows:
If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.`;
function evaluateGrade(totalMarks, isFinalExam) {
  if (isFinalExam && totalMarks >= 90) {
    // If it's a final exam and the total marks are 90 or greater, return true (A+ grade)
    return true;
  } else if (!isFinalExam && totalMarks >= 89 && totalMarks <= 100) {
    // If it's not a final exam and the total marks are within the range 89 to 100 (inclusive), return true (A+ grade)
    return true;
  } else {
    // For all other cases, return false (grade is not A+)
    return false;
  }
}

// Example usage:
const totalMarks1 = 95;
const isFinalExam1 = false;
console.log(
  "Student 1 gets A+ grade?",
  evaluateGrade(totalMarks1, isFinalExam1)
);

const totalMarks2 = 90;
const isFinalExam2 = true;
console.log(
  "Student 2 gets A+ grade?",
  evaluateGrade(totalMarks2, isFinalExam2)
);

const totalMarks3 = 85;
const isFinalExam3 = false;
console.log(
  "Student 3 gets A+ grade?",
  evaluateGrade(totalMarks3, isFinalExam3)
);

// *** 39th Question *** //
`Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.  `;
function computeSumAndReturnResult(num1, num2) {
  // Compute the sum of the two given integers
  const sum = num1 + num2;

  // Check if the sum is in the range 50..80
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}

// Example usage:
const num1 = 30;
const num2 = 20;
console.log("Result:", computeSumAndReturnResult(num1, num2)); // Output will be 65

const num3 = 40;
const num4 = 50;
console.log("Result:", computeSumAndReturnResult(num3, num4)); // Output will be 80

// *** 40th Question *** //
`Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  `;
function checkForEight(num1, num2) {
  // Check if either number is 8
  if (num1 === 8 || num2 === 8) {
    return true;
  }

  // Check if the sum of the two numbers is 8
  if (num1 + num2 === 8) {
    return true;
  }

  // Check if the absolute difference of the two numbers is 8
  if (Math.abs(num1 - num2) === 8) {
    return true;
  }

  // If none of the conditions are met, return false
  return false;
}

// Example usage:
console.log(checkForEight(5, 3)); // Output will be true (sum)
console.log(checkForEight(12, 4)); // Output will be true (difference)
console.log(checkForEight(8, 3)); // Output will be true (first number)
console.log(checkForEight(6, 6)); // Output will be false (neither is 8, sum, nor difference)

// *** 41th Question *** //
`Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.  `;
function checkForEight(num1, num2) {
  // Check if either number is 8
  if (num1 === 8 || num2 === 8) {
    return true;
  }

  // Check if the sum of the two numbers is 8
  if (num1 + num2 === 8) {
    return true;
  }

  // Check if the absolute difference of the two numbers is 8
  if (Math.abs(num1 - num2) === 8) {
    return true;
  }

  // If none of the conditions are met, return false
  return false;
}

// Example usage:
console.log(checkForEight(5, 3)); // Output will be true (sum)
console.log(checkForEight(12, 4)); // Output will be true (difference)
console.log(checkForEight(8, 3)); // Output will be true (first number)
console.log(checkForEight(6, 6)); // Output will be false (neither is 8, sum, nor difference)

// *** 42th Question *** //
`Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31`;
function checkIncreasingMode(num1, num2, num3) {
  // Check if numbers are increasing in strict mode
  const isStrictIncreasing = num1 < num2 && num2 < num3;

  // Check if numbers are increasing in soft mode
  const isSoftIncreasing = num1 <= num2 && num2 <= num3;

  if (isStrictIncreasing) {
    return "Strict mode";
  } else if (isSoftIncreasing) {
    return "Soft mode";
  } else {
    return "Not increasing";
  }
}

// Example usage:
console.log(checkIncreasingMode(10, 15, 31)); // Output will be "Strict mode"
console.log(checkIncreasingMode(24, 22, 31)); // Output will be "Not increasing"
console.log(checkIncreasingMode(22, 22, 31)); // Output will be "Soft mode"

// *** 43th Question *** //
`Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit. `;
function sameRightmostDigit(num1, num2, num3) {
  const rightmostDigit1 = num1 % 10;
  const rightmostDigit2 = num2 % 10;
  const rightmostDigit3 = num3 % 10;

  // Check if any two or all three numbers have the same rightmost digit
  if (
    rightmostDigit1 === rightmostDigit2 ||
    rightmostDigit1 === rightmostDigit3 ||
    rightmostDigit2 === rightmostDigit3
  ) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(sameRightmostDigit(123, 34, 74)); // Output will be true (3, 4)
console.log(sameRightmostDigit(56, 27, 98)); // Output will be false (no matching rightmost digit)
console.log(sameRightmostDigit(100, 200, 300)); // Output will be true (0, 0, 0)

// *** 44th Question *** //
`Write a JavaScript program that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.  `;
function evaluateIntegers(num1, num2, num3) {
  // Check if any one of the integers is greater than or equal to 20
  if (
    (num1 >= 20 && num1 < num2 && num1 < num3) ||
    (num2 >= 20 && num2 < num1 && num2 < num3) ||
    (num3 >= 20 && num3 < num1 && num3 < num2)
  ) {
    return true;
  } else {
    return false;
  }
}

// Example usage:
console.log(evaluateIntegers(15, 25, 30)); // Output will be true (25 is >= 20 and < 30)
console.log(evaluateIntegers(10, 22, 18)); // Output will be false (none meet the condition)
console.log(evaluateIntegers(20, 10, 15)); // Output will be false (none meet the condition)

// *** 45th Question *** //
`Write a JavaScript program that checks two integer values and returns true if either one is 15 or if their sum or difference is 15.  `;
function checkValues(num1, num2) {
  // Check if either value is 15
  if (num1 === 15 || num2 === 15) {
    return true;
  }

  // Check if the sum or difference is 15
  if (num1 + num2 === 15 || Math.abs(num1 - num2) === 15) {
    return true;
  }

  // If none of the conditions are met, return false
  return false;
}

// Example usage:
console.log(checkValues(10, 5)); // Output will be true (sum)
console.log(checkValues(30, 15)); // Output will be true (either value)
console.log(checkValues(20, 6)); // Output will be true (difference)
console.log(checkValues(8, 7)); // Output will be false (neither is 15, sum, nor difference)

// *** 46th Question *** //
`Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  `;
function checkMultiples(num1, num2) {
  const isMultipleOf7Or11 = (num) => num % 7 === 0 || num % 11 === 0;

  const isMultipleOf7Or11Num1 = isMultipleOf7Or11(num1);
  const isMultipleOf7Or11Num2 = isMultipleOf7Or11(num2);

  // Check if exactly one of the numbers is a multiple of 7 or 11
  return (
    (isMultipleOf7Or11Num1 || isMultipleOf7Or11Num2) &&
    !(isMultipleOf7Or11Num1 && isMultipleOf7Or11Num2)
  );
}

// Example usage:
console.log(checkMultiples(14, 22)); // Output will be true (14 is a multiple of 7)
console.log(checkMultiples(35, 9)); // Output will be false (both are multiples of 7)
console.log(checkMultiples(25, 49)); // Output will be true (49 is a multiple of 7)
console.log(checkMultiples(11, 13)); // Output will be false (neither is a multiple of 7 or 11)

// *** 47th Question *** //
`Write a JavaScript program to check whether a given number exists in the range 40..10000.  
For example 40 presents in 40 and 4000`;
function checkInRange(number) {
  return number >= 40 && number <= 10000;
}

// Example usage:
console.log(checkInRange(40)); // Output: true
console.log(checkInRange(4000)); // Output: true
console.log(checkInRange(20)); // Output: false
console.log(checkInRange(10001)); // Output: false

// *** 48th Question *** //
`Write a JavaScript program to reverse a given string.  `;
function reverseString(str) {
  // Split the string into an array of characters, reverse the array, and then join it back into a string
  return str.split("").reverse().join("");
}

// Example usage:
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

// *** 49th Question *** //
`Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.  `;
function replaceWithNextCharacter(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);

      // Check if the character is a lowercase letter
      if (charCode >= 97 && charCode <= 122) {
          charCode = (charCode - 97 + 1) % 26 + 97; // Apply wrapping for lowercase letters
      }
      // Check if the character is an uppercase letter
      else if (charCode >= 65 && charCode <= 90) {
          charCode = (charCode - 65 + 1) % 26 + 65; // Apply wrapping for uppercase letters
      }
      // For any other characters, leave them unchanged

      result += String.fromCharCode(charCode);
  }
  return result;
}

// Example usage:
const originalString = "Hello, world!";
const replacedString = replaceWithNextCharacter(originalString);
console.log("Original string:", originalString);
console.log("Replaced string:", replacedString);

// *** 50th Question *** //

// *** 51th Question *** //

// *** 52th Question *** //

// *** 53th Question *** //

// *** 54th Question *** //

// *** 55th Question *** //

// *** 56th Question *** //

// *** 57th Question *** //

// *** 58th Question *** //

// *** 59th Question *** //

// *** 60th Question *** //

// *** 61th Question *** //

// *** 62th Question *** //

// *** 63th Question *** //

// *** 64th Question *** //

// *** 65th Question *** //

// *** 66th Question *** //

// *** 67th Question *** //

// *** 68th Question *** //

// *** 69th Question *** //

// *** 70th Question *** //

// *** 71th Question *** //

// *** 72th Question *** //

// *** 73th Question *** //

// *** 74th Question *** //

// *** 75th Question *** //

// *** 76th Question *** //

// *** 77th Question *** //

// *** 78th Question *** //

// *** 79th Question *** //

// *** 80th Question *** //

// *** 81th Question *** //
