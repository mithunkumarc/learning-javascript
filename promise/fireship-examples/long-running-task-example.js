const p = new Promise((res, rej) => {
  res(100)
})
const blocker = () => {
  /*
  // blocking : dont put long running task in the callback function(resolve/reject)
  return new Promise((res, rej) => {
    let i = 0;
    while(i < 1000000000) {
      i++;
    }
    res("million loop done");
  })
    */
  return Promise.resolve().then(v => {
    // then return promise
    // embed long running task inside promise
    let i = 0;
    while(i < 1000000000) {
      i++;
    }
    return "million loop done";
  })
}
blocker().then(data => console.log(data));
console.log("last message");
