// QUESTION :57
// Find the Average Grade: Given a list of grades, calculate the average grade.
let grades :number[]=[67 , 88, 99 , 76 ,54];
let averagegrade:number =grades.reduce((total , grades)=>total +grades ,0)/grades.length;
console.log(averagegrade);

