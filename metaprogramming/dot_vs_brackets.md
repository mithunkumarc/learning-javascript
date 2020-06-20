object properties can be accessed using dot or using brackets  

            class Person {
              constructor(first, last) {
                this.first = first;
                this.last = last;
              }
              get fullName() { return `${this.first} ${this.last}` };
            }

            const p = new Person('peter', 'parker');
            
dot property 

            console.log(p.fullName);
            
square brackets

            for (const property of ['first','last','fullName']){
              console.log(p[property]);
            }
