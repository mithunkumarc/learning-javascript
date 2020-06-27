var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {                     // any async call 
        reject('hello world');                  // or resolve('some data')
    }, 2000);
});

promise.then(function(data) {
    console.log(data);
});
promise.catch(function(err){
    console.log(err);
});
