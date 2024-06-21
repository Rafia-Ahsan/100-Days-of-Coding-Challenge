// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
// ENUM:It is a special type of lsts used to made code cleaner 
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["motorcyle"] = 1] = "motorcyle";
    vehicleType[vehicleType["bicyle"] = 2] = "bicyle";
    vehicleType[vehicleType["truck"] = 3] = "truck";
    vehicleType[vehicleType["aeroplane"] = 4] = "aeroplane";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.truck); //here we are just checking the that at which index of vehicleType truck exists
console.log(vehicleType.train); //It will give error b/c there's no as such vehice type in the enum.
console.log(vehicleType.car); //It will first check whether this exists in enum .if car exist then it will tell you the index of car in the form of output.
