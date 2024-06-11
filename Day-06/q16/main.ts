//  QUESTION :16
//  More Guests: You've found a bigger dinner table, so there's room for more guests.

let guests : string[] =["Rafeya Ahsan","Muhammad Hamza","Maha Khan"];
console.log("Great News,I've found a bigger table!");

// Adding more guests
guests.unshift("Mahnoor Fatima"); // to add in at first
guests.splice(guests.length /2,0,"Muhammad Shaheer");  //to add by splicing at index 2
guests.push("Amna Malik"); // to add at last
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
