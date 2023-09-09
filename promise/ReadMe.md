1. Javascript engine execute all sync operations first and then start Async operation so that main thread/flow not get blocked.  
2. Javascript engine will start separtate task for promise/async operation in event loop.  
3. when promise is completed it will be presented/executed in main thread.   
4. Promise also execute on main thread but on event loop not immediately but after sync operations/code.

#### call statck vs task queue

    call stack : synchronous statements or expressions goes to call stack
    example : console.log
    task queue : Asynchronous statements like setTimeout goes to task queue
    example : setTimeout, Events
    * Promise is anot taskqueue, its a micro task

#### Task queue priority

        1. Tasks from the same task queue are executed in order they arrived
        2. tasks of the same type should go to the same task queue

        examples : timers (settimeout) , event listeners

#### Rendering pipeline

        renders UI 60 frames per second or something
        it runs only when there is not task/javascript code not running / or inbetween code /task running
        if you run long operationg which is blocked, 
        UI will block as Rendereng pipeling will not work when there is a code/task running

#### Rendering pipeling blocking : solution

        split long task into smaller task
        make asynchronous , settimeout or promise or rxjs

#### Microtask queue : for Microtasks

        example : 
        Promise is a microtasks
        queueMicrotask()

#### Microtask rules : 

1. Javascript engine checks Microtask queue every time a call stack becomes empty
2. if there are multiple microtasks in the microtask queue, all of them must be executed before Rendering pipeline can run.
3. if you add more Microtasks while previous Mcirotasks are running, these new Microtasks will also have to run before the Rendering pipeline.

#### call stack / task queue / microtask : priorities of execution

1. call stack
2. microtask
3. taskqueue

#### Animation Frame queue

    for animations
    
#### Animation Frame queue

1. You can add tasks to Animation Frame Queue by invoking requestAnimationFrame(callback)
2. If there are multiple tasks in the Animation queue, all of them will be executed during browser repaint time.
3. However, if you add more tasks to the Animation queue during this process, they will have to wait untile next iteration.

#### Request Animation Frame

    used to create animation

#### Event loop

    callstack
    taskqueue : diff for diff task , timers/evetns
    microtask
    Animation frame
    rendering pipeling


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
