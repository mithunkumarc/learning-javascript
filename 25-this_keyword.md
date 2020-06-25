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


four rules to understand this :  

        1. Default binding
        2. Implicit binding
        3. Explicit binding
        4. New Binding

1. Default binding  : in this default context is window

        function foo() {
          console.log(this);
        }
        foo() // window
        
        
        // example 2
        var myFunction = function() {
           console.log(this.b);
        }

        var b = 5 ;
        myFunction();    //5  , available in window
        
2. Implicit binding : The object that is standing before the dot is what this keyword will be bound to.

        function foo() {
          console.log(this.a)
        }

        let obj = {
          a:2,
          foo:foo
          }

        obj.foo() // 2 : context is object on which function is calling
        
        // example 2
        
        var john = {
          name : 'john',
          greet : function(person) {
            return `hi ${person} , my name is ${this.name} `
          }
        }

        console.log(john.greet('rahul')); // hi rahul , my name is john 
        
3 Explicit binding : calling function without reference, instead obj is sent as argument

        In this case, you can force a function call to use a particular object for this binding, without putting a property function reference on the object. 
        so we explicitly say to a function what object it should use for this — using functions such as call, apply and bind

        function greet() {
          console.log(this.name);
        }

        const obj = {name: "raju"}
        greet.call(obj); // raju
        greet.apply(obj); // raju
 
 
4 new operator binding

        function Foo() {        
            this.name = 'Osama';
                this.say = function () {
                  return "I am " + this.name; 
             };
        }

        var name = 'Ahmed';
        var result = new Foo();
        console.log(result.name);  // osama


5 arrow funcitons :  this in arrow function will always take his value from the outside (Lexical scope).

                        var group = {
                          title: "Our Group",
                          students: ["John", "Pete", "Alice"],

                          showList() {
                            this.students.forEach(
                                 (student) => { 
                                               // this here refer to group object
                                          console.log(this.title + ': ' + student);
                                        }
                            );
                          }
                        };

                        group.showList();

                        output : 
                        Our Group: John
                        Our Group: Pete
                        Our Group: Alice

