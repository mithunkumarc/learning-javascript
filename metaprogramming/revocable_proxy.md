proxying obj can be stopped 

target :   

        const array = [1, 2, 3, 4, 5, 6];         

handler : transorm function :  

        const handler = {
          get: function(target, property, receiver) {
            console.log('proxy intercepted the call');
            return target[property];
          }
        };

revocable proxy : proxy can be stopped any time, when u call revoke()

        const {proxy: numbers, revoke } = Proxy.revocable(array, handler);

proxy works here , revoke not yet called  

        console.log(numbers.length);

revoking proxy  

        revoke();//stop perfoming proxy

further proxy leads to error  

        try {
          //err: cant perform get on proxy that has been revoked
          console.log(numbers.length);  
        } catch(ex) {
          console.log(ex.message);
        }
