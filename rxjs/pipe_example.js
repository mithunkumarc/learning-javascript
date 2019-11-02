import { range, of } from 'rxjs';
import { map, filter, scan, reduce, take } from 'rxjs/operators';

const source$ = range(0, 10);

/* 
  pipe() : 
  You can use pipes to link operators together. Pipes let you combine multiple functions into a single function.
*/ 

source$.pipe(
  filter(x => x % 2 === 0),      //  2 4 6 8 
  map(x => x + x),               //  4 8 12 16
  scan((acc, x) => acc + x,0)    //  0 : starting value, you can have any value
).subscribe(x => console.log(x)) //  0 4 12 24 40


/* 

  dont use reduce in place of scan
  Scan will show all values emitted on source observable.
  Reduce will show only the final value emitted on source observable.

*/

// try replacing scan with reduce , you will see only final value as output

/* example 2 */
console.log('*'.repeat(10),'another example ','*'.repeat(10));
const series$ = of(1,2,3).pipe(
                  take(2), // takes only first two numbers
                  map(x => x * 2)
                );

series$.subscribe(n => console.log(n)); // output : 2, 4
