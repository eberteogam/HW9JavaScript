// Part 1
const currentDate = new Date();

// (0 = January, 11 = December)
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Adding 0 to keep two digit convention
function padZero(num) {
  return num < 10 ? '0' + num : num;
}

// Format month and day to always be two digits
const formattedMonth = padZero(month);
const formattedDay = padZero(day);

// Format string in MM/DD/YYYY format
const dateString = `Today is ${formattedMonth}/${formattedDay}/${year}`;

document.getElementById('dateOutput').textContent = dateString;


// Part 2
const value1 = "42";   
const value2 = "100";  
const value3 = "19.75";
const value4 = "hello";

const converted1 = Number(value1);
const isNaN1 = Number.isNaN(converted1);
const isInteger1 = Number.isInteger(converted1);
const result1 = `Original: '${value1}' -> Converted: ${converted1} -> isNaN: ${isNaN1} -> isInteger: ${isInteger1}`;

const converted2 = Number(value2);
const isNaN2 = Number.isNaN(converted2);
const isInteger2 = Number.isInteger(converted2);
const result2 = `Original: '${value2}' -> Converted: ${converted2} -> isNaN: ${isNaN2} -> isInteger: ${isInteger2}`;

const converted3 = Number(value3);
const isNaN3 = Number.isNaN(converted3);
const isInteger3 = Number.isInteger(converted3);
const result3 = `Original: '${value3}' -> Converted: ${converted3} -> isNaN: ${isNaN3} -> isInteger: ${isInteger3}`;

const converted4 = Number(value4);
const isNaN4 = Number.isNaN(converted4);
const isInteger4 = Number.isInteger(converted4);
const result4 = `Original: '${value4}' -> Converted: ${converted4} -> isNaN: ${isNaN4} -> isInteger: ${isInteger4}`;

const allResults = result1 + '<br>' + result2 + '<br>' + result3 + '<br>' + result4;

document.getElementById('numberConversionOutput').innerHTML = allResults;

// Part 3
const number1 = 45;
const number2 = 1;
const number3 = 55;

// Addition
const sum = number1 + number3;
// Multiplication
const mult = number1 * number2;

const formatted = sum.toFixed(2);

const mathResults = 
  `Number 1: ${number1}<br>` +
  `Number 2: ${number2}<br>` +
  `Number 3: ${number3}<br><br>` +
  `Addition (45 + 55): ${formatted}<br>` +
  `Multiplication (45 × 1): ${mult}`;

document.getElementById('mathOutput').innerHTML = mathResults;


// Part 4 + Extra Credit (ternary)
const status0 = value1 === "42" ? 'PASS' : 'FAIL';
const conditionalMessage1 = `${status0} - The value '${value1}' is ${value1 === "42" ? 'equal to "42"' : 'not equal to "42"'}.`;

const status1 = converted3 > 20 ? 'PASS' : 'FAIL';
const conditionalMessage2 = `${status1} - The converted value of '${value3}' (${converted3}) is ${converted3 > 20 ? 'greater than 20' : 'not greater than 20'}.`;

const part2WithConditionals = allResults + '<br><br><strong>Conditional Checks (Using Ternary Operators for extra credit):</strong><br>' + conditionalMessage1 + '<br>' + conditionalMessage2;
document.getElementById('numberConversionOutput').innerHTML = part2WithConditionals;

