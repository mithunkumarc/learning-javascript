The rest parameter syntax allows us to represent an indefinite number of arguments as an array.  


        function printNumbers(...numbers) {
          //rest is array
          console.log(numbers, numbers instanceof Array);
        }

        printNumbers(); // [] true
        printNumbers(1,2); // [1, 2] true
        printNumbers(1,2,2);// [1,2,3] true
        printNumbers(1);// [1] true


        
        
