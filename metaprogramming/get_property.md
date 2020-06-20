get property, similar to c sharp , part of class prototype, instance can call use this property


            class Person {
              // fields must be defined in constructor
              // static field must be defined outside class 
              // static field : Classname.field = value;
              constructor(first, last) {
                this.first = first;
                this.last = last;
              }
              get fullName() { return `${this.first} ${this.last}` };
            }

            const p = new Person('peter', 'parker');
            console.log(p.fullName);// peter parker
            // fullName is not member of p , it is coming from parent class prototype (Person)
            console.log(Object.getPrototypeOf(p)); // {fullName: "undefined undefined"}
            console.log(Object.getPrototypeOf(Object.getPrototypeOf(p))); // { } , this is coming from p -> Person -> Object
            //p's prototype -> Person's Protoype -> Object's prototype : empty {} -> null : no more parent
