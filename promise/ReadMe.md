Javascript engine execute all sync operations first and then start Async operation so that main thread/flow not get blocked.  
Javascript engine will start separtate task for promise/async operation in event loop.  
when promise is completed it will be presented/executed in main thread.   
Promise also execute on main thread but on event loop not immediately but after sync operations/code.

read : 
    
    https://github.com/codediodeio/async-await-pro-tips
    https://github.com/jawache/async-javascript-workshop/tree/master/node
    https://github.com/vp-online-courses/asynchronous-javascript-tutorial
    https://github.com/vp-online-courses/asynchronous-javascript-tutorial/tree/master/5-promises
