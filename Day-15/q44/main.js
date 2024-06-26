// QUESTION :44
// Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwich with ".concat(items.join(','), "."));
}
make_sandwich("Ham", "Cheese");
make_sandwich("Beef Patty", "Lettuce");
make_sandwich("Tomatoes", "Peperoni");
