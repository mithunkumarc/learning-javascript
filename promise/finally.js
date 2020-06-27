// whether promise success of failure, finally will be always executed
// indicated completion of promise
// one of the use is having flag "isLoading"

let isLoding = true;
let promise = new Promise((resolve,reject) => {
  //setTimeout(() => resolve("resolved"),2000)
  setTimeout(() => reject("rejected"),2000)
})

promise.then(function(data){
  console.log(data);
})
promise.catch(function(error) {
  console.log(error)
})
promise.finally(() => {
  console.log("completed");
  isLoading = false;
})
