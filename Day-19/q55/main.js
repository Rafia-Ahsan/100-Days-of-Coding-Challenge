// QUESTION :55
// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var originalNumbers = [2, 55, 6, 7, 92, 100];
var twicedNumber = originalNumbers.map(function (number) { return number * 2; });
console.log(twicedNumber);
