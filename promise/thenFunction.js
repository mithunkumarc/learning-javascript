// then takes two functions as arguments
// if result is success first funciton will be executed
// if result is false second function will be executed



  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });

  // resolve runs the first function in .then
  promise.then(
    result => console.log(result),  // if success
    error => console.log(error)     // if failure
  );
