//  QUESTION :16
//  More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["Rafeya Ahsan", "Muhammad Hamza", "Maha Khan"];
console.log("Great News,I've found a bigger table!");
// Adding more guests
guests.unshift("Mahnoor Fatima");
guests.splice(guests.length / 2, 0, "Muhammad Shaheer");
guests.push("Amna Malik");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
