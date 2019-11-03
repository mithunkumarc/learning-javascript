import { Subject } from 'rxjs';

/*
An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. 
While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.
*/

const subject = new Subject();

subject.subscribe({
  next: (v) => console.log(`observer A : ${v}`)
});

subject.subscribe({
  next: (v) => console.log(`observer B : ${v}`)
});

subject.next(1);
subject.next(2);

/* 
  output :
  observer A : 1
  observer B : 1
  observer A : 2
  observer B : 2
 */
