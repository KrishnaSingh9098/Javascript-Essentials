console.log("Hello World")

function abcd(fn){
    fn()               // call this fn it prints an Hello 
}

let a = abcd(function(){           // but this a gives a value undefined
    console.log("Helllo")  
})
console.log(a)   //Undefned

// Callback function : ek aisa function jo hum kisi or function me pass krte hai future me chalane ke liye 

// HOFS : ek aisa function jo accept kare doosra function in parameter ya fir return kkare ek aur function , aise function ko kehte 
//       hai higher order function



// CloSures In JAASCRIPT : 





// # Cloures Example 

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();  // `outer` returns `inner`, and `count` is preserved

// counter();  // Output: 1
// counter();  // Output: 2
// counter();  // Output: 3


// // Data Privacy / Encapsulation:

// function secretHolder(secret) {
//     return function() {
//         console.log("Secret is:", secret);
//     };
// }

// const tellSecret = secretHolder("JS is awesome!");
// tellSecret();  // Output: "Secret is: JS is awesome!"

// // Creating Partially Applied Functions / Currying:

// function multiply(x) {
//     return function(y) {
//         return x * y;
//     };
// }

// const double = multiply(2);
// console.log(double(5)); // Output: 10

// // Creating Private Counters:

// function createCounter() {
//     let count = 0;
//     return {
//         increment: function() {
//             count++;
//             return count;
//         },
//         reset: function() {
//             count = 0;
//         }
//     };
// }

// const counter = createCounter();
// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// counter.reset();
// console.log(counter.increment()); // 1





// Practice Closures  

// Correct way to get DOM elements
let btn = document.getElementById("btn");
const myName = document.getElementById("my-name");

// Closure creator
function makeTextSizer(size) {
    function changeSize() {
        myName.style.fontSize = size + "px";  // size must have "px"
    }
    return changeSize;
}

// Create different sized closures
const sizes = [12, 32, 42, 72];
sizes.forEach(size => {
    let btn = document.createElement("button");
    btn.innerText = `Set ${size}px`;
    btn.addEventListener("click", makeTextSizer(size));
    document.body.appendChild(btn);
});


  //--------------------------------------------------- CURRYING IN JAVASCRIPT ----------------------------------------//

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}    

console.log(add(4)(5)())    // Without ES6 


// With Es6 LOok Likes  

const addd = (a) => (b) => (c) => a+b+c;
console.log(add(5)(4)(6))                       // With Es6 Features 


// Another Email Example without Es6 features  

 function sendEmail (to){
   return function(subject){
    return function(body){
        console.log(`Email is Send to " ${to}with subject ${subject}: ${body} `)
    }
   }
}

let step1 = sendEmail('singhgyanendra382@gmail.com')
let step2 = step1("New Order Confirmation")
step2("Hey Krishna ,There was Something for You")



// Another Email Example with Es6 features  

const Email = (to) => (subject) => (body) => `Email is Send to " ${to}with subject ${subject}: ${body} `

let step3 = sendEmail('singhgyanendra382@gmail.com')
let step4 = step1("New Order Confirmation")
step4("Hey Krishna ,There was Something for You")