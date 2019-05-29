'use strict';
//object literals
let name = 'rajat';
let age = 25;
let user = {name , age};
console.log(user);
//output : {name : 'rajat', age:25};

//example 2 : destructing
let data = [100,200];
let get_data = () => data;
let x,y = get_data();//destructuring , similar to unpacking in python 
console.log(x,y);
let [x1,y1,z1=300] = get_data();
console.log(x1,y1,z1);
