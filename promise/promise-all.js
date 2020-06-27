// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise as an output. 
// This returned promise will resolve when all of the input's promises have resolved

const promise1 = new Promise((resolve1, reject1) => {
  setTimeout(resolve1, 100, 'foo');
});

const promise2 = new Promise((resolve2, reject2) => {
  setTimeout(resolve2, 100, 'bar'); 
});

const promise3 = new Promise((resolve3, reject3) => {
  setTimeout(resolve3, 100, 'tar');
});

// if one of the promise fails(reject) : then wont work
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
