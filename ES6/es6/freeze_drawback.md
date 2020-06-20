freeze makes object : A frozen object can no longer be changed;  

        'use strict';
        const sam = Object.freeze({name: 'Sam', age: 2, address: { street: 1 } });

        //sam.name = 'sam'; //ERROR

        //sam.age = 4; //ERROR

        //works 
        sam.address.street = 7; //freeze is shallow, does not go deep

        console.log(sam); // street becomes 7
        
output :  

        address: Object
        street: 7
        __proto__: Object
        age: 2
        name: "Sam"
