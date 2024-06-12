// QYESTION :39
//  City Names: Formatting city-country pairs.
// Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.
function city_country (city :string , country:string):string
{
    return (`${city} is in ${country}.`);
}
console.log(city_country("Tokyo" , "Japan"));
console.log(city_country("Lahore" , "Pakistan"));
console.log(city_country("Dehli" , "India"));
console.log(city_country("Riyad" , "Saudia"));
console.log(city_country("Melbourne" , "Austrailia"));