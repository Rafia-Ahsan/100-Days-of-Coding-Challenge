// QUESTION :47
// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
let laptops =[
    {make :"DELL" , model:"XS-05" , year:2022},
    {make:"HP" , model :"Macbook Air" , year:2024},
    {make:"Lenovo" , model: "LV-075" , year :2007},
];
let [laptop1 , laptop2]=laptops;
console.log(laptop1);
console.log(laptop2);