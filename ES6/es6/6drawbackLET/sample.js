'use strict';
let value = 4;//use const instead let
let printIt = () => console.log("The value is "+value);
//bad code, , input being changed after declaring printIt()
value = 0;
//input must remain same
printIt();

/*
    code that makes the reader feel stupid
    hard to reason
    hard to maintain

*/
