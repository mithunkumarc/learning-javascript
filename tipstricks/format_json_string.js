const user = {name: 'raju', age:32};
console.log(JSON.stringify(user,null,'\t'));

/*
output : 

  {
  "name": "raju",
  "age": 32
  }

*/

/*
  you can display only values you want.
*/

const example = {
  "student": [ 
    
     { 
        "id":"01", 
        "name": "Tom", 
        "lastname": "Price", 
        "age": 19
     }, 
   
     { 
        "id":"02", 
        "name": "Nick", 
        "lastname": "Thameson",
        "age": 20 
     },

     { 
      "id":"03", 
      "name": "David", 
      "lastname": "Lee",
      "age": 21 
   } 
  ]   
}

/*
 output only name and lastname in the student array. 
 add tab to each level.
*/
const withTab = JSON.stringify(
                            example,
                            ['student','name','lastname'],
                            '\t'
                          );
console.log(withTab);


/*
output : 

      {
      "student": [
      {
      "name": "Tom",
      "lastname": "Price"
      },
      {
      "name": "Nick",
      "lastname": "Thameson"
      },
      {
      "name": "David",
      "lastname": "Lee"
      }
      ]
      }

*/
