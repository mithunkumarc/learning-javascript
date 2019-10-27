// 0 1 1 2 3 5 8 13
function fibonocci(number){
  let series = [];
  let a = 0 , b = 1;
  series.push(a,b);
  let fib = a + b;
  for(let i = 3 ; i <= number ; i++){
    series.push(fib);
    a = b;
    b = fib;
    fib = a + b;
  }
  return series;
}

let fibSeries = fibonocci(10);
console.log(fibSeries);
