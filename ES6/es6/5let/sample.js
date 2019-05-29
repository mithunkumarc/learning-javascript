'use strict';
// avoid redefining variable using let
//avoid hoisting using let 
let foo = function(){
    let local1 = 7;
    console.log(local1);
    //1.no redefine when you have let
    //let local1 = 7; //already declared
    {
        //2.no hoisting
        //local2 = 7; //cannot access before initialization
        let local2 = 8;
        console.log(local2);
    }
    //3.not visible here
    //console.log(local2); // error message : not defined 
}

foo();