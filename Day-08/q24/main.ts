// QUESTION:24
// More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// typescript
// Equality with strings
console.log("Testing equality with strings:");
let fruit: string ="apple";
console.log( fruit == "apple"); // True
console.log(fruit == "Apple"); // False

// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == fruit); // True

//  Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true  ,false); // True

// Test whether an item is in a array
let fruits:string[]= ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits[1]); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits[1]); // True