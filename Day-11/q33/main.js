// QUESTION :33
// Ordinal Numbers: Display numbers with their ordinal suffixes.
var numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numberss.forEach(function (numbersss) {
    var suffix = "th";
    if (numbersss == 1) {
        suffix = "st";
    }
    else if (numbersss == 2) {
        suffix = "nd";
    }
    else if (numbersss == 3) {
        suffix = "rd";
    }
    console.log("".concat(numbersss).concat(suffix));
});
