/* 
  parameter validation
  using error function inplace of default value for parameter
 */
const isRequired = () => {throw new Error("dfd")};

const hello = (num = isRequired()) => "hello world : " + num;

console.log(hello(5)); // 5
console.log(hello(null)); //null

try{
  hello(undefined)
}catch(err){
  // do when error thrown
  console.log("error message : ",err.message)
}

//console.log(hello()); // error
