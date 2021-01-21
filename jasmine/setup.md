1. create project folder : testj
2. install jasmine locally 
                
        testj > npm install -g jasmine

3. create jasmine project 

        testj > npx jasmine init

4. creates project structure 


        testj : project folder           
          > spec 
            > support
                jasmine.json	
            appSpec.js	: unit tests            

5. demo testcase : appSpec.js

        describe("hello", () => {
            it("hello test", () => {
                expect(true).toBe(true);
            })
        })

  
6. run test : npx jasmine spec/appSpec.js

source :  

        https://rollout.io/blog/jasmine-node-js-application-testing-tutorial/  
        https://jasmine.github.io/setup/nodejs.html  
