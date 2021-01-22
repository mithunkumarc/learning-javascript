#### describe : suite : 

contains group of specs  

#### it(description, testFunction, timeOut) : spec : 

1. Define a single spec. 
2. A spec should contain one or more expectations that test the state of the code.
3. A spec whose expectations all succeed will be passing and a spec with any failures will fail. 
4. The name it is a pronoun for the test target, not an abbreviation of anything. 
5. It makes the spec more readable by connecting the function name it and the argument description as a complete sentence.


#### fdescribe() : run specific suite

if you want to test only specific suite(describe) use prefix "f".

#### fit() : run specific test/spec

if you want to test only specific spec(it) use prefix "f".

#### xdescribe() : disable specific suite

if you want to disable specific suite(describe) use prefix "x".

#### xit() : disable specific test/spec

if you want to disable specific spec(it) use prefix "x".

#### custom matchers / third party matchers can be used

#### suites(describe) can be nested
