// QUESTION :40
// Album: Create objects for music albums.
// Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects, and introducing optional function parameters.

function make_album (artist:string , title :string , track?:number)
{
    let album ={artist ,title};
    {
        if (track)
            {
                album['tracks']=track;
            }
    }   return album;
}
console.log(make_album("Artist One" , "First Album"));
console.log(make_album("Artist Two" , "Second Album"));
console.log(make_album("Artist Three" , "Third Album" , 12));
console.log(make_album("Artist Four" , "Fourth Album"));
console.log(make_album("Artist Five" , "Fifth Album",10));

