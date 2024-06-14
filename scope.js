function outer() {
    var a = "string 1"
    var b = { name: "Nick", age: 32 };
    console.log("Inner a", a); 
    console.log("Inner b", b);
    
    function inner() {
        console.log("Inner a", a); 
        console.log("Inner b", b);
    
  
    inner(a,b);
    console.log(a);
    console.log(b);
  }
  } 
  
  outer();
  