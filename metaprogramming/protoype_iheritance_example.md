an object can inherit method from parent class/object's prototype, use Object.setPrototypeOf(yours,parent);  

          //object, as parent 
          const hero = {
            work() {
              return "working"
            }
          }

          //class
          class Person {
            constructor(first, last) { 
              this.first = first; 
              this.last = last;
            }

            get fullName() { return `${this.first} ${this.last}`; }
          }


          const p = new Person("peter","parker");
          console.log(p);
          Object.setPrototypeOf(p, hero);// p is inheriting work() through prototype
          console.log(p); // u cannot see work() as member , its on p's prototype but can be called as member function
          console.log(p.work());
          console.log(Object.getPrototypeOf(p))//u can see work() came from hero
