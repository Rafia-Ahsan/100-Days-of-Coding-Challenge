// QUESTION :28
// Stages of Life: Determine a person’s life stage with an if-else chain.
var age = 63;
if (age <= 3) {
    console.log("This person is a Baby");
}
else if (age < 18) {
    console.log("This person is a Toddler");
}
else if (age >= 18 && age <= 20) {
    console.log("This person is a teenager");
}
else if (age > 20 && age < 60) {
    console.log("This person is an Adult");
}
else if (age >= 60) {
    console.log("This person is Aged");
}
