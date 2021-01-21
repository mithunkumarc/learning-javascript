
1. create project folder : lets say "unittest"
2. npm init (index.js)
3. npm install
4. npm install jasmine 
5. npx jasmine init : add jasmine support : creates support/jasmine.json 
    
        using this : npx jasmine init : because jasmine installed locally

6. create spec file : spec/index-spec.js
7. running test : npx jasmine spec/index-spec.js
8. source : index.js

        exports.multiply = function (multiplier1, multiplier2) {
            return multiplier1 * multiplier2;
        };

9. spec file : spec/index-spec.js

        var calculator = require("../index");
        console.log(calculator);
        describe("multiplication", function () {
          it("should multiply 2 and 3", function () {
            var product = calculator.multiply(2, 3);
            expect(product).toBe(6);
          });
        });


10. final project structure : 

        unittest : project folder 
          > node_modules
          > spec 
            > support
              jasmine.json	
            index-spec.js	: unit tests
          index.js 			: source file
          package.json

  
  
source :  

        https://rollout.io/blog/jasmine-node-js-application-testing-tutorial/  
        https://jasmine.github.io/setup/nodejs.html  
