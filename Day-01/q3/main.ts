//  QUESTION :03
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// declaring variable
let firstName : string = "rafeya";

// To convert in "Upper Case" --In capital letters
console.log("UPPER CASE: ",firstName.toUpperCase());

//  To convert in "Lower Case" --In Small Letters
console.log("LOWER CASE: " ,firstName.toLowerCase());

//To convert in "Title Case" --Shows the name with the First Letter Big
console.log("TITLE CASE: ",firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()); 