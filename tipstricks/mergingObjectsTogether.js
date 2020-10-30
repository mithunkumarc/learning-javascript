const name = {name: "rajendra"};
const age = {age: 33};
const city = {city: 'bengaluru'};
const user = {...name, ...age, ...city};
console.log(user);

/*
  output :
  {name: "rajendra", age: 33, city: "bengaluru"}
*/


/*
  in case of same key, latest value will be considered
*/

const u1 = {
  name: "raj",
  age:31
}
const u2 = {
  name: "rajy",
  age:32
}
const u3 = {
  name: "raju", // this will replace old name value
  age:33  // this will replace old age value
}
const users = {...u1, ...u2, ...u3};
console.log(users);

/*
  output : 
  {name: "raju", age: 33}
*/
