// if one of the promise failse, promise.catch() will be fired

const promise1 = new Promise((resolve1, reject1) => {
  setTimeout(resolve1, 100, 'foo');
});

const promise2 = new Promise((resolve2, reject2) => {
  setTimeout(reject2, 100, 'bar'); 
});

const promise3 = new Promise((resolve3, reject3) => {
  setTimeout(resolve3, 100, 'tar');
});

// second promise fails, so then() will not be triggered
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// output : bar as second promise fails, if p2 and p3 fails, only p2 error will be displayed
Promise.all([promise1, promise2, promise3]).catch((err) => {
  console.log(err);
});
