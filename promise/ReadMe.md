1. Javascript engine execute all sync operations first and then start Async operation so that main thread/flow not get blocked.  
2. Javascript engine will start separtate task for promise/async operation in event loop.  
3. when promise is completed it will be presented/executed in main thread.   
4. Promise also execute on main thread but on event loop not immediately but after sync operations/code.

#### call statck vs task queue

    call stack : synchronous statements or expressions goes to call stack
    task queue : Asynchronous statements like setTimeout/promise goes to task queue

#### Task queue priority

        1. Tasks from the same task queue are executed in order they arrived
        2. tasks of the same type should go to the same task queue

#### Rendering pipeline

        renders UI 60 frames per second or something
        it runs only when there is not task/javascript code not running
        if you run long operationg which is blocked, 
        UI will block as Rendereng pipeling will not work when there is a code/task running

#### promise.then() vs async/await

    promise.then() : 
    it is anynchronous , next statment will keep executing not wait for promise output
    
    promise.then(data => console.log(data)
    console.log("hello"); // this will not wait till above promise completes
    
    async/await : block executin till it gets output from promise

read : 
    
    https://github.com/codediodeio/async-await-pro-tips
    https://github.com/jawache/async-javascript-workshop/tree/master/node
    https://github.com/vp-online-courses/asynchronous-javascript-tutorial
    https://github.com/vp-online-courses/asynchronous-javascript-tutorial/tree/master/5-promises
