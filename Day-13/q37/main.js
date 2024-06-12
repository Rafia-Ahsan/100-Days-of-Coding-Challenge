// QUESTION :37
// Large Shirts: Default values in make_shirt().
// Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.
function tshirts(size, massage) {
    if (size === void 0) { size = "Large"; }
    if (massage === void 0) { massage = "I'm an AI Engineer"; }
    console.log("Make a T-shirt of ".concat(size, " size with ").concat(massage, " massage on it."));
}
tshirts();
tshirts("Medium", "Coding is Life");
tshirts("Small");
tshirts("Exra large", "I love Typescript");
