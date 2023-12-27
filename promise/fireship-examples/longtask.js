function test() {
  // use below for long task
  return Promise.resolve("hello").then(v => {
    if(0) {
      return "test"
    } else {
      throw "some error occured1"
    }
    
  });
}

async function test1() {
  try {
    const res = await test();
    return res
  } catch(e) {
    return e
  }
  
}

test1().then(v => console.log(v))
