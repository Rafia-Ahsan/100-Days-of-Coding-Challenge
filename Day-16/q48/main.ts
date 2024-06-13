// QUESTION :48
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

// a, b) => a - b: For each pair of elements a and b:
// If a - b is less than 0, a will come before b.
// If a - b is greater than 0, a will come after b.
// If a - b equals 0, the order of a and b will remain the same.
let prices1:number[]=[1000 , 2000 , 3000];
let prices2:number[]=[1200 , 2200 , 2900];
let prices3:number[]=[1750 , 500 , 67890];
let combinedPrices :number[]=[...prices1 ,...prices2,...prices3].sort((a,b)=>a-b);
console.log(combinedPrices);
