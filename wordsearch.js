//Lighthouse Lab
//Week 2, Day 3
//Pair Programming - Word Search
//Anil Patel, pair programmed with Arlet and Eklas 

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join('')); //map takes in letters, and callback ls.join transforms it
    // callback fn 'ls => ls.join('')' is being handed into map function
    // callback parameter is 'ls'; ls is entire row. empty string '' is passed to join fn 
    // letters.map is 
    console.log(letters); //test parameter: original 2D array
    console.log(horizontalJoin); //test transformation
    //bus is join is horizontal, sol'n is nested loop, both directions
    //build a comparison word, find it in word built in loop
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    } 
    for (l of verticalJoin) { //not defined yet, need nested loop
        if (l.includes(word)) {
            return true; 
        }
    } 
    return false;     
};

module.exports = wordSearch


/* orginal code
const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
}
module.exports = wordSearch
*/


