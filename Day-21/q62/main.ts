// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

// BLUEPRINT: Its called an interfce that provides a structure.

// Creating a blueprint (interface) for student information
interface Student{
    name:string ;
    age:number  ;
    courses:string[] ;
}
// Filling te blueprint with an example
let student:Student={
    name :"Rafeya Ahsan",
    age : 19,
    courses:["Discrete Mathematics" , "Statistical Inference" , "Differential Equation"]

}
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.