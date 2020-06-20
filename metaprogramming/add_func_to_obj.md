adding function to object

            class Person {
              constructor(first, last) {
                this.first = first;
                this.last = last;
              }
              get fullName() { return `${this.first} ${this.last}` };
            }

            const p = new Person('peter', 'parker');
            p.work = function() {return 'working'};
            console.log(p.work());
            console.log(p);//work become member
