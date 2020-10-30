/*
  filtering falsy values from array
 */
/* falsy values
    undefined null NaN 0 "" false
 */

const myArray = [undefined,null,NaN,0,"",false,"hello world"];
console.log(myArray.filter(Boolean));

/*
  output : 
  ["hello world"]
*/
