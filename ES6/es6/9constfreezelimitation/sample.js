'use strict';
const sam = Object.freeze({name:'Sam',age:2,address:{street : 1}});

//sam = {}; //error , const var cant be reinitialized

//sam.age = 4; //error : object is freezed

//but freeze is shallow, does not go deep
sam.address.street = 7;

console.log(sam);

