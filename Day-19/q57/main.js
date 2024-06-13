// QUESTION :57
// Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [67, 88, 99, 76, 54];
var averagegrade = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
console.log(averagegrade);
