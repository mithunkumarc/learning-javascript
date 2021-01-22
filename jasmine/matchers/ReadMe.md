toBeDefined() : test whether variable is defined or not.(has value or not)

toBeUndefined() : test whether variable is undefined.(value not assinged)

toBeNaN() : test wheter variable has a value which is not a number. (NaN)

toThrow(new Error("message sent by method")) : test whether method throwing error with specific error.

        var throwMeAnError = function() {   
         throw new Error("my error"); 
        }; 

        it ("Hey this will throw an Error ", function() { 
          expect(throwMeAnErrorFunction).toThrow(new Error("my error")); // you can see function is not called
        }); 
