// Exercise 13
//
// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function countBs(str) {
  // str is a string
  let letterB = str.split ("");
  
  let count = 0;
  letterB.forEach(function (letter) {
    if (letter === "B") count += 1;
  });
  
  return count;
}

console.log(countBs("Blah Blah Blee Blee"))
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = countBs;
