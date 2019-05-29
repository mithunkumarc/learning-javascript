var foo = function(){
    var local1 = 4;
    // //if you don't declare, variable become global
    local2 = 5;//this became global variable
    console.log(local1);
    console.log(local2);
}

foo();
console.log(local2);