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

// // Get current date
// const currentDate = new Date();

// // Get the day, month, and year
// const day = currentDate.getDate();
// const month = currentDate.getMonth() + 1; // Months are zero-based
// const year = currentDate.getFullYear();

// // Function to add leading zeros if necessary
// function addLeadingZero(number) {
//   return number < 10 ? '0' + number : number;
// }

// // Format the date in mm-dd-yyyy format
// const mmddyyyy = `${addLeadingZero(month)}-${addLeadingZero(day)}-${year}`;

// // Format the date in mm/dd/yyyy format
// const mmddyyyy_slash = `${addLeadingZero(month)}/${addLeadingZero(day)}/${year}`;

// // Format the date in dd-mm-yyyy format
// const ddmmyyyy = `${addLeadingZero(day)}-${addLeadingZero(month)}-${year}`;

// // Format the date in dd/mm/yyyy format
// const ddmmyyyy_slash = `${addLeadingZero(day)}/${addLeadingZero(month)}/${year}`;

// // Output the results
// console.log(`mm-dd-yyyy: ${mmddyyyy}`);
// console.log(`mm/dd/yyyy: ${mmddyyyy_slash}`);
// console.log(`dd-mm-yyyy: ${ddmmyyyy}`);
// console.log(`dd/mm/yyyy: ${ddmmyyyy_slash}`);
