// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
var circle = {
    kind: "circle",
    radius: 4.5,
};
var rectangle = {
    kind: "rectangle",
    length: 7,
    width: 6,
};
console.log(circle); //for circle
console.log(rectangle); //for rectangle
// We made a flexible program that can describe different shapes in detail
