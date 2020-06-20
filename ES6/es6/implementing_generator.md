

        class Wheel{}
        class Car{
          constructor(){
            this.wheels = [
              new Wheel(),
              new Wheel(),
              new Wheel()
            ]
          }

          //generator
          *[Symbol.iterator]() {
            for(let i = 0 ; i < this.wheels.length ; i++) {
              yield this.wheels[i];
            }
          }
        }

        const car = new Car();
        for(const wheel of car) {
          console.log(wheel);
        }
