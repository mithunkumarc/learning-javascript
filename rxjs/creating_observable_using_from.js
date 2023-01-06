const { Observable, of, from } = require("rxjs");
// from: used to create iterable observable
// usally list/array
// if you send string it will send character by character

const obs = from([1,3,4]); // returns 1 3 and 4 one by one
//const obs = from("hello world"); // returns char by character
//const obs = from(123); //error: not iterable

obs.subscribe({
    next: (v) => console.log(v),
    error: (err) => console.log(err),
    complete: () => console.log("completed")
})


/*
>node index.js
1
3
4
completed

>node index.js
h
e
l
l
o

w
o
r
l
d
completed

*/
