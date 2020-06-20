run below program in node js

              class Wheel {}

              class Car {
                constructor() {
                  this.wheels = [ new Wheel(), new Wheel(), new Wheel(), new Wheel()];
                }

                //like overriding ???
                [Symbol.iterator]() {
                  let index = 0;
                  const self = this;

                  return {
                    next() { 
                      return { done: index == self.wheels.length, value: self.wheels[index++]}; 
                    }
                  };
                }
              }

              const car = new Car();

              for(const wheel of car) {
                console.log(wheel);
              }
