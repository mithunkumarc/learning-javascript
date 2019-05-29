'use strict';

let numbers = [100,200,300];
console.log('for in prints index')
for(let number in numbers){
    console.log(number);
}

console.log('use for of to print elements')
for(let number of numbers){
    console.log(number);
}

console.log('use entries to print index with elements');
for(let [index,number] of numbers.entries() ){
    console.log(`index : ${index} number : ${number}`);
}