console.log("Hello World")

// function abcd(a,b,c,...d){
//     console.log(a,b,c,d)
// }

// abcd(1,2,3,4,5)


let num = [1, 2, 3, 4, 5, 6];  // Initial array
num = [...num, 7, 8, 9];  // Using the spread operator to add elements to the array
console.log(num);



(function() {
    console.log("This is an IIFE!");
  })();

  (function(message) {
    console.log(message);
  })("Hello, IIFE!");
  
  
