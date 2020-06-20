if you want to search propery from object dont use Object.keys() as it will not list inherited property
iterate from object direclty instead of Object.key(ref), eg : for(const prop in person){}

            class Person {
              constructor(first, last) {
                this.first = first;
                this.last = last;
              }
              get fullName() { return `${this.first} ${this.last}` };
            }

            const p = new Person('peter', 'parker');
            // fullName will not appear, because it is inherited
            for(const property of Object.keys(p)) {
              console.log(`${property} : ${p[property]}`)
            }
            
            // keys as index
            for(const property in p) {
              console.log(`${property} : ${p[property]}`);
            }
            
searching property from object : 

          //good idea
          console.log('fullName' in p); // true
          //bad idea
          console.log('fullName' in Object.keys(p)); // false
