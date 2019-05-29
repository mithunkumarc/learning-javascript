'use strict';
//example 1 : variable arguments
// function find_sum(...numbers){
//     //using fat arrow function
//     let result = numbers.reduce((pre,next) => pre+next);
//     console.log(result);
// }

// find_sum(1,2,3);
// find_sum(4,5,6,7);
// find_sum(2,3);



//example 2 : sending parameters as array using
//spread operator
// const greet = function(name1,name2){
//     console.log(`hello ${name1} ${name2}`);
// }

// const names = ['sharath','abhinith'];
// greet(...names);


//example 3  : explode object literals
let sam = {name : 'sam', age : 2};
let kim = {...sam,age:4};
console.log(kim);

//ouptut : 
// {name: "sam", age: 4}
// age: 4
// name: "sam"