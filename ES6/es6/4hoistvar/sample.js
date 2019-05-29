'use strict';
//use strict may not stop hoisting : unclear?
var foo = function(){
    var local1 = 7;
    console.log(local1);
    console.log(local2);//declared below(hoisting) 
    {
        //var will hoist variable
        var local2 = 8;//if you skip, u will get error
        console.log(local2);
    }
    console.log(local2);
}

foo();