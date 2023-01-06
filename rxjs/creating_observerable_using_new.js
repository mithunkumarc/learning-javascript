const { Observable, of } = require("rxjs");

const obs = new Observable(subscribe => {
    subscribe.next(10);
    subscribe.next(20);
    //subscribe.error("something went wrong"); //observer stops here, no further messages will be received
    subscribe.next(30);
    subscribe.next(40);
    subscribe.complete(); // if you miss sending complete, complete callback not called in observer
});

const k = obs.subscribe({
        next: (v) => console.log(v),
        error: (e) => console.log(e),
        complete: () => console.info("completed") // 
    }
);


// use below in ngOnDestroy in angular
// k.unsubscribe();
