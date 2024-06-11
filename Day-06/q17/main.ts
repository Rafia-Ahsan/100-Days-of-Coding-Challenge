//  QUESTION : 17
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

console.log("Sorry,I'm unable to invite you for the dinner");
let guests : string[] =["Mahnoor Fatima","Rafeya Ahsan","Muhammad Shaheer","Hamza Ahmed","Amna Malik"];

while (guests.length > 2 )
    {
        let removedguest : string =guests.pop()
        console.log(`Sorry ${removedguest},I can't able to invite you for the dinner`);

};
guests.forEach(guest=>{
    console.log(`Dear ${guest},I still invite you at today's dinner`);
});
guests.splice(0, guests.length);
console.log(guests);