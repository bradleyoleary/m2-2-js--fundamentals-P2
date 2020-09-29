// Exercise 11
//
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function calculateAverage(grades) {
  let sum = 0

  for (let x = 0; x < grades.length; x++) {
    sum += grades[x];
  } return Math.round(sum / grades.length);
}

console.log (calculateAverage ([75, 85, 56, 96, 63, 80]));
// -----------------------------------------------------------------
// Edit only the code between the lines (above)

// Create more test cases.

// This is needed for automated testing (more on that later)
module.exports = calculateAverage;
