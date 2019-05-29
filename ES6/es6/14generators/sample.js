'use strict';

class Wheel{}

class Car{
    constructor(){
        this.wheels = [ new Wheel(), new Wheel(), new Wheel()];
    }

    *[Symbol.iterator](){
        //yield this.wheels[0];
        //yield this.wheels[1];
        //yield this.wheels[2];
    
        for(const wheel of this.wheels){
            yield wheel;
        }
    
    }
}

const car = new Car();

for(const wheel of car){
    console.log(wheel);
}