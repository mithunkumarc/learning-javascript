array

        const array = [1, 21, 12];

what we want is  
 
        console.log(Math.max(array[0], array[1], array[2])); // 21  

easy way using spread operator  

        console.log(Math.max(...array)); // 21

---

Another example 

                const greet = function(name1, name2, ...others) {
                  console.log(`${name1}, ${name2}, ${others.join(', ')} `);
                }

                const names = ['Jack', 'Jill'];
                //jack jill
                greet(...names);

                const more = ['Troy', 'Jane'];
                //jack jill troy jane
                greet(...[...names, ...more]);
                //jack jill bob troy jane
                greet(...[...names, 'Bob', ...more]);
