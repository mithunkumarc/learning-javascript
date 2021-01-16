function can be assigned to variable.

general declaration

      function addition() {
        return a + b;
      }

function expression 

      let add = function(a, b) {
        return a + b;
      };                          // semicolor because function is like value for variable add, best practice end with semicolon


      console.log(add(3,4)) // 7
