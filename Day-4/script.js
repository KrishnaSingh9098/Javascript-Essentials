

// function krishna(){
//     console.log("Helo Babies")
//     let str = "Krishna Singh"
//     let ans = str.length
//     console.log(ans)
// }


// krishna()
// krishna()
// krishna()
// krishna()
// krishna()

// function can be called many times .



// function ghrPerAAo (){
//     console.log("BAbay")
// }

// ghrPerAAo()


// let str = "Hello javaScript!";
// console.log(str.includes("Java"))


// console.log("IMMEDIATELY WORKS")   /// THis code Works Immedialety in the console without calling the anythin.

// function Krishna(){
//     console.log("Hello Guys")
// }

// Krishna()
// Krishna()
// Krishna()

// Functiopns are Start doing their work whenever they were Called

// #PAssinG a parameter in a Function.

// function greet(name){
//     console.log(name)
// }
//  greet('hEllo world')
// greet('hii')
// greet('byy')
// greet('Krisnna')
// greet('Singh')


// function ABCD(a, b, c, d) {
//     console.log(a, b, c, d)
// }

// ABCD(1, 20, 3, 56)  // Ye function 4 arguments ke saath call hua hai, toh console par output hoga: 1 20 3 56

// ABCD()              // Yahaan function bina kisi argument ke call hua hai, toh output hoga: undefined undefined undefined undefined



// function Shayri(a){
//     console.log(a)
    
// }

// Shayri('Tumse kisne Kaha Ki Daga Krta Hu Mai ; Agar Krne Per Aau To Sirf Vafa Krta Hu Mai.')
// Shayri("Kya Vo Sab Baate Sunai Deti HAi Tujhe Jo Teri Tasveero Se Kara Krta Hu Mai.")
// Shayri()   // Undefind




// #  Fat Arrow Function With Implicit Return .  Apne App Return Krna Without Return KEyword.
 //   #Or jab humm krte hai toh vo explixit Return hota hai

// function abcd(){
//     return 12;
// }


//   let cc = abcd()
//   console.log(cc)


// IMPLICIT ARROW FUNCTION   { KHud Se value Return krt Hai  }


// var abcd=() =>12
// let d = abcd()               // This was the way for mplicit return of Code.


// Rest Parameter 

// function abcd(a,b,c,...rest){
//     console.log(a,b,c,rest)
// }

// abcd(1,2,3,4,5,6,7,8,9)


// function logMessages(...messages) {
//     console.log(messages);  // Output will be an empty array
//   }
  
//   logMessages("Hello");
//   logMessages();

//rest Operator me data linear hi aata hai.


// When you declare a variable with var, it is hoisted to the top of its scope, but only the declaration is hoisted,
//  not the initialization. As a result, if you try to access the variable before it’s initialized, it will return 
//  undefined (not a ReferenceError).

//                             // var myVar;
// console.log(myVar)         //  console.log(myVar)        Output : Undefined (because the declaration is hoisted but not the assignment)
// var myVar = 20;
// console.log(myVar)           //OutPut:20  (now it's assigned the value)



//Hoisting with let and const

// When you declare a variable with let or const, the variable is hoisted to the top of its block scope, but they are placed in
//  a "temporal dead zone" (TDZ) from the start of the block until the line of initialization.
//  This means accessing the variable before its initialization results in a Reference Error.

// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
// let myLet = 10;
// console.log(myLet); // 10

// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
// const myConst = 20;
// console.log(myConst); // 20




//let num = [1, 2, 3, 4, 5, 6];  // Initial array
// num = [...num, 7, 8, 9];  // Using the spread operator to add elements to the array
// console.log(num);


// let e = Math.max(...num)
// console.log(e)

// let f = Math.min(...num)
// console.log(f)
  

// function sums(...nums){
//     console.log(nums)                       // Treated as like a Array
//     console.log(...nums)                    // Treated as like a single values
// }

// sums(1,2,3,4,5)



// function sums(a,...nums){
//     console.log(a)                           // a holds the value : 1
//     console.log(nums)                       // Treated as like a Array .
//     console.log(...nums)                    // Treated as like a single values .
// }

// sums(1,2,3,4,5)  

// You Cannot add a Any Parameter after a REST parameter. It Could Through Error.
// Example :            


function sums(a,...nums){
    console.log(a)                           
    console.log(nums)                       
    console.log(...nums)                    
}

sums(1,2,3,4,5)



function logMessages(...messages) {
    console.log(messages);  // Output will be an empty array
  }
  
  logMessages("Hello");
  logMessages();



  function sums(a,...nums){
    console.log(a)                           
    console.log(nums)                       
    console.log(...nums)  
    let sum = 0;
for(let i=0;i<nums.length;i++){
    sum+=nums[i];
   
}  
return sum;                
}


let c = sums(1,2,3,4,5)
console.log(c)


function test(){
    console.log(arguments)
    console.log(arguments[1]) 
    console.log("Inside Text")
}

test(1,"Hello")


// Advanced Syntactical Sugar
  
// const add = (x, y) => x + y;

// console.log(add())
// console.log(add(45,5))


// # Something More About Arrow Functions : 

// 1. Arrow Function With No Parameter: 

// const greet=()=>{console.log("HEllo Js")}
// greet()

// 2. Arrow Function With  Parameter: 

const add = (num1,num2) => num1+num2;   // if You Writing a code in a same line there was a no need of return Statement by Explicitly

// 3. Multiple Line Arrow Functions : 

const multiply = (length,breadth) =>{
     a=length*breadth;
    return a;
  }

  console.log(multiply(4,5))
     

 

//   let aread = (length,breadth)=>{
//     console.log(arguments)   // Shouldn't be available on browser it could shows not defined. But in Node js Environment it was available.
//     return length*breadth
//   }

//   console.log(aread())



  let arr = [10,20,30,40]
  console.log(arr.slice(1,3))

  let ker = [5,10,1,25]
  ker.sort()
  console.log(ker)

  var a = [1,2,2,3,4,4,5]
  var b = [...new Set(a)]
  console.log(b)

  let arr3 = [1,2,3,4,5]
  let reversed = 0;
  for(let i=arr3.length-1;i>=0;i--){
    reversed.push(arr3[i])
  }

  console.log(reversed)


  