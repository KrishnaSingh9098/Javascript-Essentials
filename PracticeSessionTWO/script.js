// //-----------------------------------------------Question-1------------------------------------------------------//

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// console.log("First Solution Ended");

// let j = 10;

// while (j > 0) {
//   console.log(j);
//   j--;
// }

// console.log("First Solution ended again with while loop");

// // First Question  Done it will GIves you an reverse order of number from Ten to One ?

// //-----------------------------------------------Question-2-----------------------------------------------------------//

// let num = 3;
// for (let i = 1; i <= 10; i++) {
//   console.log(i * num); // Noral solution without while loop
// }

// console.log("Second Solution Ended without While loop");
// // By USing While loop :

// let nums = 3;
// let i = 1;
// while (i <= 10) {
//   console.log(i * nums);
//   i++;
// }

// console.log("Second Solution Ended with While loop");

// Second Question  Done it will GIves you a multiple of 3 from 1 to 10 by using while loop ?

//-------------------------------------------------Question-3-----------------------------------------------------------//
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log("The sum of numbers from 1 to 100 is:", sum);

// console.log("Solution with normal For loop");


// //-------------------------------------------------Question-4-----------------------------------------------------------//

// // Number of rows for the star pattern
// let rows = 5;

// // Outer loop for rows
// for (let i = 1; i <= rows; i++) {
//     let stars = ''; // Initialize an empty string for each row
    
//     // Inner loop for printing stars
//     for (let j = 1; j <= i; j++) {
//         stars += '* '; // Add star followed by space to the string
//     }
    
//     // Print the row of stars
//     console.log(stars);
// }



// //-------------------------------------------------Question-5-----------------------------------------------------------//

// let str = "javaScript"

// for(let i of str){
//    console.log(i)
// }


//-------------------------------------------------Question-6-----------------------------------------------------------//


// Question : Remove Dublicates values from an array ?

// let arr = [1,2,3,4,1,2,4,3,5,1,6,4,1,8,7,2,6,7,5,1]
// var ans  = [...new Set(arr)]
// console.log(ans)  

// //Question : find the second largest number in an Array ?


//  let anss = ans.sort(function (a,b){
//  // return a-b                       // if n sort method we returning an a-b it should sort the value in ascending order.
//   return b-a                       // if n sort method we returning an b-a it should sort the value in descending order.
//  })
// console.log(anss[1])

 //Unique
 //sort array
 // 1st array

// REverse an array without using .reverse() function 


// same but unique  method 
// let arr = [1,2,3,4,1,2,4,3,5,1,6,4,1,8,7,2,6,7,5,1];
// console.log([...new Set(arr)].sort(function(a, b) {
//     return b - a;
// })[1]);



// // LAst Second Question : OF TE PRACTICE SESSSION 


// let tru = [1,2,3,4,1,2,4,3,5,1,6,4,1,8,7,2,6,7,5,1];
// let tru2 = []

// for(let i=tru.length-1;i>=0;i--){
//     tru2.push(tru[i])
// }

// console.log(tru2)      //On this way we can reverse an array  ? 



// LAst  Question : OF TE PRACTICE SESSSION  MOst Frequent Element : 

let arr = [3, 4, 1, 3, 4, 6, 7];
let obj = {};

arr.forEach(function(value) {
    // obj[value] ? (obj[value] = 1) : obj[value]++;   // Agar hum undefined me ++ krenge toh NaN milta hai.
    obj[value] === undefined ? (obj[value] = 1) : obj[value]++;
});
 
console.log(obj);   // {1: 1, 3: 2, 4: 2, 6: 1, 7: 1} Output


// St point KOn kitni baar aaya hai ye nil=kalte hai pehle .


// Implement a Higher Order Fuction that Applies a Function Twice ?

function applyTwice(value, fn){
    return fn(fn(value))
}

function addTwo(num){
    return num+2
}

console.log(applyTwice(10,addTwo))


// // Function to return a function that multiplies the given number by another number
function mul(value) {
    return function(num) {
        return value * num;
    };
}

// Example usage:
const multiplyBy2 = mul(2); // create a function to multiply by 2
console.log(multiplyBy2(5)); // Output: 10 (2 * 5)

const multiplyBy3 = mul(3); // create a function to multiply by 3
console.log(multiplyBy3(5)); // Output: 15 (3 * 5)



// Question 3 : 