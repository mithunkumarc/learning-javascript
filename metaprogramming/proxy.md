The Proxy object enables you to create a proxy for another object,   
which can intercept and redefine fundamental operations for that object.  

sample object  

            const target = {
              message1: "hello",
              message2: "everyone"
            };


handler function which transform info of source object properties

            const handler3 = {
              get: function (target, prop, receiver) {
                if (prop === "message2") {
                  return "world";
                }
                return "none";
              },
            };


creating proxy of sample object

            const proxy3 = new Proxy(target, handler3);

            console.log(proxy3.message1); // none
            console.log(proxy3.message2); // world
