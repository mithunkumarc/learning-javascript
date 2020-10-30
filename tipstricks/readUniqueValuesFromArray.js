const data = [1,1,'one','two',false,false,true,true];
const uniqueValues = [...new Set(data)];
console.log(uniqueValues);

/*
  [1, "one", "two", false, true]
*/
