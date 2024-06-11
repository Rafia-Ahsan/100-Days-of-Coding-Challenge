//  QUESTION : 12
// Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.

let names : string[] =["ALI","WANIYA","HAMZA","RAFEYA","SAAD","MAHA","MAHNOOR"];
for (let i=0 ; i< names.length ;i++)
    {
        console.log(`Hello,${names[i]} How have you been?`);
    }