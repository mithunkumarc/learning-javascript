const user = {name: "ranjan", age:32, city: "bidar"};
/* reading only age from user */
const {age} = user;
/* reading only name from user */
const {name} = user;
/* reading city as location (alias) */
const {city: location} = user;
console.log(name, age, location);

/*
  ranjan
  32
  bidar
*/
