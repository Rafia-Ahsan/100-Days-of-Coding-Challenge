// QUESTION :37
// Large Shirts: Default values in make_shirt().
// Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.


function tshirts (size : string ="Large" , massage :string ="I'm an AI Engineer")
{
    console.log(`Make a T-shirt of ${size} size with ${massage} massage on it.`);

}
tshirts();
tshirts("Medium" , "Coding is Life");
tshirts("Small");
tshirts("Exra large","I love Typescript");