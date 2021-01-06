#### simulating setInterval 

#### read : https://stackoverflow.com/questions/41191077/unsubscribe-is-not-a-function-on-an-observable

##### import interval 

        import { interval } from "rxjs";

##### create interval observable

        let numbers = interval(1000);

#### subcrible function returns disposable observable. to stop this observable, call unsubscribe on disposable

        let numbesubs = numbers.subscribe(x => {
          console.log("Next: ", x);
          if (x == 10) {
            somefunction();
            //numbers.unsubscribe();
          }
        });

#### unsubscribing/stopping interval

        function somefunction() {
          numbesubs.unsubscribe();
        }

// Logs:
// Next: 0
// Next: 1
// Next: 2
// Next: 3



#### complete code

        import { interval } from "rxjs";

        let numbers = interval(1000);

        let numbesubs = numbers.subscribe(x => {
          console.log("Next: ", x);
          if (x == 10) {
            somefunction();
            //numbers.unsubscribe();
          }
        });

        function somefunction() {
          numbesubs.unsubscribe();
        }

        // Logs:
        // Next: 0
        // Next: 1
        // Next: 2
        // ..
        // Next: 10
