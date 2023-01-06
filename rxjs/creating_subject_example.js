const { Observable, of, from, Subject } = require("rxjs");

/*
A Subject is like an Observable, but can multicast to many Observers. 
Subjects are like EventEmitters: they maintain a registry of many listeners.
*/
const subject = new Subject(); // in typescript you can use Subject<type>()

subject.subscribe({
    next: (v) => console.log(v)
})

subject.subscribe({
    next: (v) => console.log(v)
})

subject.next(100);
subject.next(200);
subject.complete();
subject.next(300);// not recived

/*
usecase

In service declare and return subject
in one component

    service.getSubject().next("+1")

in another component

    sevice.getSubject().subscribe(v => console.log(v))
*/
