'use strict';

const greet = function(name, msg = 'hello'){
    console.log(`${msg} ${name}`);
}

greet('jane');
greet('Jane','welcome');