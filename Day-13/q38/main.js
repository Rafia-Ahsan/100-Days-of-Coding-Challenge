// QUESTION :38
// Cities: Describing cities with a function.
// Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.
// declaring a function
// we only declare country name by defult agar hum parameters main pass nhi karenge th y default yahi print hoga
function cities(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
cities("karachi");
cities("Lahore");
cities("Islamabad");
cities("Jeddah", "Saudia Arabia");
