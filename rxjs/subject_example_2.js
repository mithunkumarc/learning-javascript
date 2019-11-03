/* another example */

import { Subject, from } from 'rxjs';

/*
  subject as an observable , it can also be a observer and subscribe to another observable
*/ 

const subject = new Subject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});


const observable = from([1,2,3]);


// any one who subscribe to subject(line number 9) also subscribed to observable (line number 20)

observable.subscribe(subject);

/* 
  output : 
  observerA: 1
  observerB: 1
  observerA: 2
  observerB: 2
  observerA: 3
  observerB: 3
*/
