
        function too(){
          too.count = 4; //"too" refer to itself
          console.log(too.count);
        }

        too(); // 4

        >> too.count
        4

// anonymous function cannot refer to itself
