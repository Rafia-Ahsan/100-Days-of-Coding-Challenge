// QUESTION :44
// Sandwiches: Summarize sandwich orders with varying ingredients.
// Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.

function make_sandwich(...items:string[])
{
    console.log(`Making a Sandwich with ${items.join(',')}.`);
}
make_sandwich("Ham" , "Cheese");
make_sandwich("Beef Patty","Lettuce");
make_sandwich("Tomatoes" , "Peperoni");