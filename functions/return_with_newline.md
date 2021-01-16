never add newline with return statement

      function hello() {
          return              // new line added here, so 'hello john' wont be returned, instead undefine returned
          'hello john';
      }

      >> hello();
      >> undefined

 // JavaScript assumes a semicolon after return
