// var allows redeclaration of variable
// use strict to avoid redeclaration of variable
'use strict';
var foo = function() {
  var local1 = 4;
  console.log(local1);
//  unclear about use strict whether it stops 
//  redeclaration of variable
// disadvantage of var : 
// it allows redeclaration of variable
// that too in same scope
  var local1 = 7;         //redefine a variable that is in scope!
  console.log(local1);
}

foo();              