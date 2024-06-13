// QUESTION :48
// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// a, b) => a - b: For each pair of elements a and b:
// If a - b is less than 0, a will come before b.
// If a - b is greater than 0, a will come after b.
// If a - b equals 0, the order of a and b will remain the same.
var prices1 = [1000, 2000, 3000];
var prices2 = [1200, 2200, 2900];
var prices3 = [1750, 500, 67890];
var combinedPrices = __spreadArray(__spreadArray(__spreadArray([], prices1, true), prices2, true), prices3, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
