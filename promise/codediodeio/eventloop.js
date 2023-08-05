// synchronous code : executing first
console.log("synchronous 1");
// Asynchronous code : executed last
setTimeout(_ => console.log("timeout 2"),0);
// Asynchronous code : execution starts after all sync code executed
Promise.resolve().then(_ => console.log("promise 3"));
// synchronous code : executing first
console.log("synchronous 4");

/*
    synchronous 1
    synchronous 4
    promise 3
    timeout 2
*/
