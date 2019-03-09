#### for in used to iterate over properties of object

#### for of used to iterate iterable objects like array, set



#### for in 

        var person = {name:"rajat",age:13};
        for(let i in person){
          console.log(i);
        }
        output : 
        
        > name
        > age

        for(let i in person){
          console.log(person[i]);
        }
        
        output :
        > rajat
        > 13


        example : 2 for array
        
        let numbers = [100, 200, 300];
        for(let i in numbers){
          console.log(i);
        }
        
        output : prints indexes
         0
         1
         2
         
        //to display elements 
        
        for(let i in numbers){
          console.log(numbers[i]);
        }
        
        100
        200
        300
        
#### for of : 

    for(let i of person){
	    console.log(i);//error person is not iterable
     }
     
     
    for(let i of numbers){
      console.log(i);
    }
    
    > 100
    > 200
    > 300
 
