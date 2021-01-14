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

strange result while comparing null and zero

      alert( null > 0 );  // (1) false
      alert( null == 0 ); // (2) false
      alert( null >= 0 ); // (3) true
      
The value __undefined__ shouldn’t be compared to other values, undefined becomes NaN when it is compared with number


      alert( undefined > 0 ); // false (1)
      alert( undefined < 0 ); // false (2)
      alert( undefined == 0 ); // false (3)
