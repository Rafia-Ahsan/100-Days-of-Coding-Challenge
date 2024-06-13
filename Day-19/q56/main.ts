// QUESTION :56
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
// for string only
let items=[1,"Mango","23years",400 , "This is my 56th program" , 234566];
let newitem=items.filter(items => typeof items=== "string");
console.log(newitem);
// for numbers only
let newitems2=items.filter (items=> typeof items ==="number")
console.log(newitems2);