function outer() {
    let a = "string 1"
    let b = "string 2"
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
  