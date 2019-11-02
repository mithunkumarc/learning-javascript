import { from } from 'rxjs';

let numbers = [10,20,30];
const observable = from(numbers);
numbers.push(40); // observable reads this changes too
numbers.push(50); // observable reads this changes too
const o1 = observable.subscribe(x => console.log(x));
// after subscribing observalbe
numbers.push(60); // not read by observable

//o2 gets all data
const o2 = observable.subscribe(x => console.log(x + '*'));

// to unsubscribe
o1.unsubscribe();
o2.unsubscribe();
