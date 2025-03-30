console.log("Hello World")

// function abcd(a,b,c,...d){
//     console.log(a,b,c,d)
// }

// abcd(1,2,3,4,5)


let num = [1, 2, 3, 4, 5, 6];  // Initial array
num = [...num, 7, 8, 9];  // Using the spread operator to add elements to the array
console.log(num);



// let ans =(function() {
//     console.log("This is an IIFE!");
//   })();

//   (function(message) {
//     console.log(message);
//   })("Hello, IIFE!");
  

//   // Here, we're defining a variable `ans` and assigning it the result of an IIFE (Immediately Invoked Function Expression).
// let ans = (function abcd() {
//   // Inside the IIFE, we define a local variable `a` with the initial value of 12.
//   var a = 12;

//   // The function returns an object with two methods: `set` and `get`.
//   return {
//     // `set` method: It accepts a parameter `val` and assigns it to the variable `a`.
//     set: function(val) {
//       a = val; // This updates the value of `a` to whatever value is passed to `set()`.
//     },
//     // `get` method: It logs the current value of `a` to the console.
//     get: function() {
//       console.log(a); // This prints the current value of `a` to the console.
//     },
//   };
// })();

// // The `set` method is now called with the argument `"32"`, which will change the value of `a` to "32".
// ans.set("32");

// // Now, the `get` method is called. It will print the current value of `a`, which is now `"32"`.
// ans.get(); // Output: "32"



// var ans =(function abch(){
//   var lolo = 12;
// return {
//   imageEffect : function(){
//     console.log('image effect')
//   },
//   mouseFollower : function(){
//     console.log('mouse follower');
//   }
// }
// })();


// ans.mouseFollower();
// ans.imageEffect();


// (function() {
//   var a = 10;
//   console.log(a);
// })();

// console.log(a);



// # SomePractioce Questions Based On IIFE :

// Question 1: What will be the output of the following code?

(function() {
  var message = "Hello, IIFE!";
  console.log(message);
})();                                 // OUTPUT : Hello, IIFE!


// Question 2: What will be the output of the following code?
       
(function(a, b) {
  console.log(a + b);
})(5, 10);              // OUTPUT : 15


// Question 3: Which statement is true about the following code?

(function() {
  var x = 10;
  console.log(x);             // OUTPUT : 10
})();

console.log(x);               // OUTPUT : Reference error not Undefined



// Question 4: What will be the output of the following code?

var result = (function() {
  var num = 5;
  return num * 2;
})();

console.log(result);      //OUTPUT : 10




// Question 5: What will be the output of the following code?


var x = 10;

(function() {
  var x = 20;
  console.log(x);           
})();

console.log(x);          // OUTPUT : 20,10


// HIgher Order Function
console.log("Higher Order Function Started :")
console.log("Ek aisa function jo yaa toh return kare function nahi toh accept kare function in parameter, Ya fir dono")
console.log("Yha Function return kar rha hai")
// function abcd(){
//   return function (){
//     return function (){
//       console.log('Hello World')
//     }
//   }
// }

// // abcd()()();
// let ans = abcd()
// ans()()


// console.log("Yha per accept kr rha h function ")

// function acd(abc){
//   abc()
// }

// acd(function (){
//   console.log("Hello World")
// })





// # Example  Questions on HOFS :

// 1. 



// # Kisi function me jo function pass hote hai call krte waqt usey CallBack function kahte hai.
//  # Agar ek Function mein parameter mein tumhe function pass kiya jo pass kiya wo hai CallBack and Jismein pass kiya hai vo hai hofs.


// function abcd(e){         //  abcd higher order function.
   
// }

// abcd(function efgh(){                   // CallBack Function
//    console.log("EFGH")
// })



                                   // First Class Funtion  //

  
// function abcd(bal){

// }

// abcd(function (){
  
// })





                                            /*/ Pure Function   /*/


// function add(a,b){
//   return a+b
// }

// console.log(add(5,6))

                                                 /*/ ImPure Function   /*/

                                                //  let counter = 0;

                                                //  function incrementCounter() {
                                                //    counter += 1;  // modifies external state
                                                //    return counter;
                                                //  }
                                                //  console.log(total)


                                                // let total = 0;
                                                // function addTotal(a){
                                                //   total +=a;   // Modifies the external Variable.
                                                // }
                                                // addTotal(5)
                                                // console.log(total)  // 5
                                                                             
// var a = 12;
// function  abcd(){
//   console.log(typeof(a))        // Global Scope
// }
// abcd()

// Global Scope :

let globalVar = "I am a global variable";

function showGlobalVar() {
  console.log(globalVar); // Can access the global variable here
}

showGlobalVar(); // Output: I am a global variable
console.log(globalVar); // Output: I am a global variable


// Local Scope : 

// function localScopeExample() {
//   let localVar = "I am a local variable";
//   console.log(localVar); // Can access localVar inside the function
// }

// localScopeExample(); // Output: I am a local variable
// console.log(localVar); // Error: localVar is not defined


// Functional Scope : 


// function operate(a,b,operation){
//   return operation(a,b);
// }

// function add(a,b){
//   return a+b
// }

// console.log(operate(5,6,add))



function greet(name){
  return function(message){
    console.log(`${message},${name}`)
  }
}

let greetfn = greet("vishva")
greetfn("Hello")





// ARRAY_HOFS 

// 1. MAP FUNCTION : 

const nums = [1,2,3,4,5]  //EACh element Transformation
const res = nums.map(nums => nums*nums)
console.log(res)

// 2. Filter Function : 

const res1 =nums.filter(nums => nums%2==0)
console.log(res1)

// 3. REDUCE FUNCTION : AGGREGATE METHOD: 

  const res2 = nums.reduce((acc,num )=> acc+num,0)
  console.log(res2)