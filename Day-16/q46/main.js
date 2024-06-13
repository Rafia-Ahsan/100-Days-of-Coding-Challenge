//QUESTION :46
// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.
var laptop = {
    make: "DELL",
    model: "XS05",
    year: 2022,
    describe: function () {
        console.log("This is a laptop of ".concat(this.make, " having a model ").concat(this.model, " manufactured in ").concat(this.year, "."));
    }
};
laptop.describe();
