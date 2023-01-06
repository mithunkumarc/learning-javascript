const { Observable, of } = require("rxjs");
// of : returns observable and by default complete callback will be sent 

//const observer = of("one"); 
//const observer = of(["one", "two", 3]); // whole array sent in one shot, considers as one object
//const observer = of("one", "two", "three"); // sends value one by one 
const observer = of({hello: "world"});

observer.subscribe({
    next: (d) => console.log(d),
    error: (err) => console.log(err),
    complete: () => console.log("completed")
})

/*
>node index.js
one
completed

>node index.js
[ 'one', 'two', 3 ]
completed

>node index.js
{ hello: 'world' }
completed
*/
