//  QUESTION : 17
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Sorry,I'm unable to invite you for the dinner");
var guests = ["Mahnoor Fatima", "Rafeya Ahsan", "Muhammad Shaheer", "Hamza Ahmed", "Amna Malik"];
while (guests.length > 2) {
    var removedguest = guests.pop();
    console.log("Sorry ".concat(removedguest, ",I can't able to invite you for the dinner"));
}
;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",I still invite you at today's dinner"));
});
guests.splice(0, guests.length);
console.log(guests);
