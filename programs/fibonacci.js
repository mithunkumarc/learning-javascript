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


// dynaimc programming 
function fib(n){
  let table = [];
  table.push(1);
  table.push(1);
  for(let i = 2 ; i <= n ; i++){
    table.push(table[i-1] + table[i-2]);
  }
  console.log(table);
}

fib(6)
