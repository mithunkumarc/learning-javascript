#### Babel and Typescript

Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).  
Typescript is a superset of Javascript that compiles down to Javascript.  
Both of these do exactly what compilers do: Take one language and convert into a different one!

#### compiler and interpreter
      
      // initially fast but later slow becuase of lack of optimization(no reuse of duplicate/repeated code)
      Interpreter translates just one statement of the program at a time into machine code.	
      // initially slow but later fase, reuse of duplicate/repeated code(optimization)
      Compiler scans the entire program and translates the whole of it into machine code at once.


#### compiler vs interpreter

| Interpreter      | Compiler |
| ----------- | ----------- |
| Interpreter translates just one statement of the program at a time into machine code.      | Compiler scans the entire program and translates the whole of it into machine code at once.       |
| An interpreter takes very less time to analyze the source code. However, the overall time to execute the process is much slower.	| A compiler takes a lot of time to analyze the source code. However, the overall time taken to execute the process is much faster. |
| An interpreter does not generate an intermediary code. Hence, an interpreter is highly efficient in terms of its memory. |	A compiler always generates an intermediary object code. It will need further linking. Hence more memory is needed. |
| Keeps translating the program continuously till the first error is confronted. If any error is spotted, it stops working and hence debugging becomes easy.	| A compiler generates the error message only after it scans the complete program and hence debugging is relatively harder while working with a compiler. |
| Interpreters are used by programming languages like Ruby and Python for example.	| Compliers are used by programming languages like C and C++ for example. |


#### is JavaScript is interpreted

      initially js was interpreted.
     interpreter transforms or interprets a high-level programming code into code that can be understood by the machine.
     interpreter was slow as there was no/few optimization.
     optimization : reuse repeated/duplicated code.
     now js engines uses both interpreter and compiler(like JIT)
