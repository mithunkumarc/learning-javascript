

          const person = {};
          Object.defineProperty(person, "name" ,{
            value : "raj",
            writable: false
          } );
          console.log(person.name);
          person.name = "saj"; // cant writable, ignored, noerror
          console.log(person.name); //raj
