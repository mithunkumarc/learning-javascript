The this keyword behaves differently in JavaScript compared to other languages.  

In JavaScript the value of this not refer to the function in which it is used or it’s scope but is 
determined mostly by the invocation context of function (context.function()) and where it is called.


        function foo() {
          var a = 2;
          bar();
        }
        function bar(){
          console.log(this.a);
        }
        foo();// undefined
        // foo is looking a at global scope (window)
        

