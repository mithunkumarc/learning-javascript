use prototype of class to add method

          class Person {
            constructor(first, last) {
              this.first = first;
              this.last = last;
            }
            get fullName() { return `${this.first} ${this.last}` };
          }

          const p = new Person('peter', 'parker');
          Person.prototype.work = function() {return "working"};
          console.log(p);//first, last displayed but not working
          //since work in inherited
          console.log(p.work());// work becomes inherited
