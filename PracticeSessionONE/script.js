console.log("Hello World");

// Question ONE : Log "Hello, Javascript" to the console in three different Ways

// console.log("Hello, javascript")
// console.warn("Hello, Javascript")
// console.error("Hello, Javascript")
// console.info("Hello, Javascript")
// console.table({namr:"Krishna", age:15})

// Question Two : Perform 35*2-(10/2)+7 and log te result ?

// let a = 35*2
// let b = (10/2)+7
// let c = a-b
// console.log(c)          // Output : 58 Answer    // Wrong answer

// console.log(35*2-(10/2)+7) // 72 answer

// Question Three : Log the Type OF "123", 123,true, and null using TYpeOf() ?

console.log(typeof "123"); // String
console.log(typeof 123); // Number
console.log(typeof true); // Boolean
console.log(typeof null); // Object
let arr = [1, 2, 3, 4];
console.log(typeof arr);

// Question Four : Write a program that swaps the values of two variable

// let swap =  (a,b) =>{
//     let c =a
//     a=b
//     b=c
//     return a,b
// }

// console.log(swap(a,b))    // Wrong Solution

// # By Using an Array

// let swap = (a, b) => {
//     let c = a;
//     a = b;
//     b = c;
//     return [a, b]; // Return an array with both values
// }

// let a = 5, b = 10;
// let swapped = swap(a, b);
// console.log(swapped); // Output: [10, 5]

// # By Using an OBject :

// let swap = (a, b) => {
//     let c = a;
//     a = b;
//     b = c;
//     return { a, b }; // Return an object with both values
// }

// let a = 5, b = 10;
// let swapped = swap(a, b);
// console.log(swapped); // Output: { a: 10, b: 5 }

// # NORMAL METHOD :

let a = 12;
let b = 13;
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

//# USe console.group() to organnize logs into a group ?

console.group("Aaj k Hisaab");
console.log("Daal");
console.log("Chaval");
console.log("Dahi");
console.log("Roti");
console.log("Sabji");
console.groupEnd();

// # USe of Console.collapsed :

console.groupCollapsed("Aaj k Hisaab");
console.log("Daal");
console.log("Chaval");
console.log("Dahi");
console.log("Roti");
console.log("Sabji");
console.groupEnd();
// VAriables And Datatypes
// Question 6 : Declare a const Object, modify its properties, and log the updated Object?

const obj = {
  name: "Krishna",
  age: 22,
  email: "singh@gmail.com",
};

obj.age = 30;
console.log(obj); //constant se aap value ko chnge nhi kar skte magar update kar skte hai uske ander ki cheeje

Object.freeze(obj); // After this you cannot update the things which was present in the inner side of the Objjects.

const artr = [0, 1, 2, 3];
artr[0] = 2;
console.log(artr);

// Question 7 : COnvert "50" String into a number using 3 different Ways ?

console.log(Number("50"));
let ccc = parseInt("50")
console.log(typeof(ccc))

// Third way
let tyu = +"50"
console.log(typeof(tyu))




// Question 7 :  Check if "Javascript " contains "Script" without using includes() ? 

let str = "javaScript"

// console.log(str.includes("Script"))   // We want to Proove this without include method.


console.log(str.indexOf("Script")!==-1)

//Anothe One Method : 

if(str.indexOf("Script")===-1){
    console.log("False")
}
else{
    console.log(true)
}



// # SEARCH FOR FINDING SOMETHING : 

if(str.search("Script")===-1){
    console.log("False")
}
else{
    console.log(true)
}                              // It also Works Same as includes 


// Question 9: Create an arrayof 65 numbers and log the sum using reduce ?

let arts = [1,2,3,4,5]
let op = arts.reduce((a,b)=>{
    return a+b
})
console.log(op)


// one metohod for finding sum 

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value for accumulator

console.log(sum);  // Output: 15



let nums = [1, 5, 3, 9, 2];

let maxNumber = nums.reduce((accumulator, currentValue) => {
  return (currentValue > accumulator) ? currentValue : accumulator;
}, numbers[0]);  // Initial value is the first element

console.log(maxNumber);  // Output: 9


// The reduce() method iterates through the array, comparing each number to the current maximum (the accumulator).

// After going through the whole array, it returns the maximum value.


// Question : 10 .:  Explain the difference betweeen undefined, null,and NaN with Examples ?


let x;
console.log(x); // undefined, because x is declared but not initialized

function test() {}
console.log(test()); // undefined, because test() doesn't return anything


let person = null;
console.log(person); // null, explicitly set to no value

let obt = { name: "Alice" };
obt = null; // Reassigning obj to null
console.log(obt); // null

let result = 0 / 0;
console.log(result); // NaN, because 0 divided by 0 is undefined

let invalidNumber = Math.sqrt(-1);
console.log(invalidNumber); // NaN, because the square root of a negative number is not a real number
