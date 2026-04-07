# JavaScript Mini Demo

Just a simple webpage that shows off some JavaScript stuff for COMP 484 homework. Does date formatting, number checking, and some basic math.

## Live Demo

**[Check it out here](https://your-username.github.io/HW9-JavaScript-Built-In-Objects/)**

---

## What I Used

**Date Object**
- `Date()` - gets todays date
- `getMonth()` - gets the month but its 0-indexed which is annoying
- `getDate()` - day of the month
- `getFullYear()` - the year

**Number Object**
- `Number()` - converts strings to numbers
- `Number.isNaN()` - checks if something is NaN
- `Number.isInteger()` - checks if its a whole number
- `toFixed()` - rounds numbers to decimal places
- `toLocaleString()` - formats numbers with commas and stuff

**DOM stuff**
- `document.getElementById()` - grabs elements by ID
- `textContent` - sets text in an element
- `innerHTML` - puts HTML content in an element

---

## Screenshot

![the webpage](screenshot.png)

---

## What I Learned

**Easiest part?**
Honestly the date section was pretty straightforward. Just grab the date, pull out the numbers, and format it. The padding zeros part wasn't even that hard once I figured out the ternary operator trick.

**Hardest part?**
The number conversion section was kinda annoying because I had to repeat the same thing 4 times for different variables. Like I get why they don't want loops but copy-pasting similar code over and over just feels tedious. Getting all the output formatted nicely on one line was also a pain.

**Date object**
Learned that months start at 0 which is weird. So January is 0 and December is 11. Got confused at first but once you add 1 to getMonth() it's fine. Pretty useful for getting today's date and breaking it down into pieces.

**Number object**
The `Number()` function is handy for converting strings but it returns NaN if the string isn't actually a number, which is good for error checking. `isNaN()` and `isInteger()` make it easy to validate numbers. `toFixed()` is clutch for displaying prices correctly with 2 decimal places.

**Displaying stuff in browser**
Never realized how easy it is to change what shows up on a webpage with JavaScript. Just select an element with `getElementById()` and then update its `innerHTML` or `textContent`. Way cooler than just logging to the console.

---

## Files

- index.html
- script.js
- README.md (this file)
- screenshot.png

---

## How to Run

1. Clone this repo
2. Open index.html in your browser
3. It shows todays date, some number conversions, math stuff, and conditional checks

---

**Submitted April 2, 2026**

