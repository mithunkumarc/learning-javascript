'use strict';

// const is like final in java

// it protects primitive and references DOMMatrixReadOnly
// it does not protects contents within an object

const sam = {name : 'sam' , age : 2};

//cannot reinitialize
//sam = {};//error

sam.age = 4;// content can be changed

console.log(sam);