

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

// Functiopns areStart doing their work whenever trhey wee Called

// #PAssinr a parameter in a Function.

// function greet(name){
//     console.log(name)
// }

// greet('hEllo world')
// greet('hii')
// greet('byy')
// greet('Krisnna')
// greet('Singh')




// function ABCD(a,b,c,d){
//              console.log(a,b,c,d)
// }
 
// ABCD(1,20,3,56)
// ABCD()



// function Shayri(a){
//     console.log(a)
    
// }

// Shayri('Tumse kisne Kaha Ki Daga Krta Hu Mai ; Agar Krne Per Aau To Sirf Vafa Krta Hu Mai.')
// Shayri("Kya Vo Sab Baate Sunai Deti HAi Tujhe Jo Teri Tasveero Se Kara Krta Hu Mai.")




// #  Fat Arrow Function With Implicit Return .  Apne App Return Krna Without Return KEyword.
 //   #Or jab humm krte hai toh vo explixit Return hota hai

// function abcd(){
//     return 12;
// }


//   let cc = abcd()
//   console.log(cc)



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

                            // var myVar;
// console.log(myVar)         //  console.log(myVar)        Output : Undefined (because the declaration is hoisted but not the assignment)
// var myVar = 20;
// console.log(myVar)           //OutPut:20  (now it's assigned the value)



//Hoisting with let and const

// When you declare a variable with let or const, the variable is hoisted to the top of its block scope, but they are placed in
//  a "temporal dead zone" (TDZ) from the start of the block until the line of initialization.
//  This means accessing the variable before its initialization results in a ReferenceError.

// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
// let myLet = 10;
// console.log(myLet); // 10

// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
// const myConst = 20;
// console.log(myConst); // 20





let num = [1, 2, 3, 4, 5, 6];  // Initial array
num = [...num, 7, 8, 9];  // Using the spread operator to add elements to the array
console.log(num);


let a = Math.max(...num)
console.log(a)

let b = Math.min(...num)
console.log(b)
  



 