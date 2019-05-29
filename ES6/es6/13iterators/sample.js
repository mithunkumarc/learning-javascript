'use strict';
class wheel{}

class Car{
    constructor(){
        this.wheels = [new wheel(), new wheel(),new wheel()];
    }
    //[Symbol.iterator] : function name
    [Symbol.iterator](){
        let index = 0;
        const self = this;
        return {
            next(){
                //done : when to stop
                return {done : index == 3, value : self.wheels[index++]};
            }
        }
    }
}

const car = new Car();

//required [Symbol.iterator]()
for(const wheel of car){
    console.log(wheel);
}