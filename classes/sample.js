'use strict';

/*
// example 1 : creating object
class Polygon{
    constructor(){
        console.log("object created");
    }
}

//constructor is called when object is created
let p = new Polygon();

// end of example 1

*/

/*

// example 2 : creating property
class Rectangle{
    //define property in constructor
    constructor(){
        //default values of length and breadth for all Rectangle objects 
        this.breadth = 10;
        this.length = 20;
    }
}

let r = new Rectangle();
console.log('length',r.length);
console.log('breadth',r.breadth);   

*/


/*
//example 3 : each object has its own length and breadth values
class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
}
//object 1
let r1 = new Rectangle(10,20);
console.log('length',r1.length);
console.log('breadth',r1.breadth);

//object 2
let r2 = new Rectangle(15,30);
console.log('length',r2.length);
console.log('breadth',r2.breadth);
//end of example 3

*/



/*

//example 4 : only one constructor is allowed 
//below gives error
class Rectangle{
    constructor(length){
        this.length = length;
        this.breadth = 10;
    }
    constructor(breadth,length){
        this.breadth = breadth;
        this.length = length;
    }
}
//ERROR :  A class may only have one constructor

*/





/*

//example 5
//like java , subclass constructor calls parent class constructor
//super() has to be explicity should be added by user in subclass constructor
//since there cannot be more than one constructor in a same class,...
//... so no constructor chaining in same class
class Animal{
    constructor(){
        console.log("animal constructor")
    }
}
class Dog extends Animal{
    constructor(){
        //subclass constructor must call parent class constructor
        //using super();
        super();
        console.log("dog constructor");
    }
}


let d= new Dog();
//output : 
//animal constructor
//dog constructor

*/



/*

//example 6 : defining functions 
//tostring function also implemented
//to get classname : use <classname>.name
class Animal{
    eat(){
        console.log(`eat function of ${this}`);
    }
    sleep(){
        console.log(`sleep function of ${this}`);
    }
    toString(){
        return Animal.name;
    }
}

let a = new Animal();
a.eat();
a.sleep();


*/




/*

//example 7 : if you declare more than one method with same name
//recent(last) method will be considered, 
class Mobile{
    //this method will be ignored
    sendMessage(number1){
        console.log("empty send message 1",number1);
    }
    //this method is considered
    sendMessage(number1,number2){
        console.log("empty send message 2",number1,number2);
    }
}

let m = new Mobile();
m.sendMessage("111");//output : 111,undefined
m.sendMessage("111","222"); //output : 111,222


*/






/*

//example 8: Animal properties inherited to Dog
class Animal{
    constructor(){
        this.name = "tom";
    }
    eat(){
        console.log(`eat function of ${Animal.name}`)
    }
}

class Dog extends Animal{
    //dog gets properties of Animal : name and eat()
}

let d = new Dog();
d.eat();
console.log('name',d.name);


*/



/*

//example 9 : overriding
class Animal{
    eat(){
        console.log(`eat function of ${Animal.name}`);
    }
}
class Dog extends Animal{
    eat(){
        console.log(`eat function of ${Dog.name}`);
    }
}

let d = new Dog();
d.eat();//dogs overrided method is called


*/


/*

//example 10
//static variable and static method
//static variable must be declared outside constructor
//just like no overloaded method for normal method same for static method
//recently declared method will be considered incase of duplicate/overloaded methods
class Animal{
    static count = 0;
    constructor(){
        Animal.count++;
        //or just count++;
    }
    static getCount(){
        return Animal.count;
    }
    // static getCount(){
    //     return 100;
    // }
}
let a1 = new Animal();
let a2 = new Animal();
let a3 = new Animal();
console.log(Animal.count);
console.log(Animal.getCount());




*/




/*

//example 11
//mixin used as interface
//if two mixin with same method
//latest/recently added mixin method will be considered 
class Animal{

}
//mixin 
let pet1 = {
    eat(){
        console.log(`eat function pet1`);
    }
}

// let pet2 = {
//     eat(){
//         console.log(`eat function pet2`);
//     }
// }

Object.assign(Animal.prototype, pet1);
//Object.assign(Animal.prototype, pet2);
let a = new Animal();
a.eat();

*/


/*

//example 12 : 
//protected property : Protected properties are usually prefixed with an underscore _.
//That is not enforced on the language level, 
//but there’s a convention that such properties and methods should not be accessed from the outside. 

class ATMcard{
    _code = 3456;
    constructor(pin){
        this._pin = pin;
    }
}

let a = new ATMcard(1234);
//console.log(a._code); not a good practice



*/



/*

//example 13 : setter and getter properties
//similar to properties in csharp
class CoffeeMachine{
    constructor(){
        this._power = 0;//protected
    }

    set power(value){
        this._power = value;
    }

    get power(){
        return this._power;
    }
}

let cm = new CoffeeMachine();
cm.power = 50;//setter must be implemented
console.log(cm.power);




*/


