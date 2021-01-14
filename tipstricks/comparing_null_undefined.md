without strict check, output is true

      alert( null == undefined ); // true

with strict check, output is false because, null is object and undefined is type of "undefined"

      alert( null === undefined ); // false
      
if you try to convert/parse null to integer, output is zero

     >>  +null   // + is used for parseInt
     >>  0

if you try to convert/parse undefined to number, output is NaN

      >> +undefined      // + is used for parsing
      >> NaN
