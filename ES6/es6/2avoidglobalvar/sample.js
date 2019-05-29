'use strict';
var foo = function(){
    var local1 = 4;
    //uncaught reference : local2 is not defined
    local2 = 5;//ERROR
    console.log(local1);
}
foo();