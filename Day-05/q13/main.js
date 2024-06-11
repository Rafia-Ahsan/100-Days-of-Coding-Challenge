//  QUESTION :13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportationMode = ["Yamaha Motorcyle", "Porsche Car", "Emirates Plane"];
transportationMode.forEach(function (transport) {
    console.log("My favourite mode of transportation is ".concat(transport));
});
