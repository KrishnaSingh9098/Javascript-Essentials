// var a = 25;
// console.log(a)


// var b = 'Krishna'
// console.log(b)

// var bool = true
// console.log(bool)


// var age =prompt("enter Your Age")
// console.log(typeof(age))


// var num1 = Number(prompt("Enter a Number 1"))
// var num2 = Number(prompt("Enter a Number 2"))



// console.log(num1+num2)


// ------ UNdefined  ----- //


// var a = null
// console.log(a)

/// ---- Sysmbol ----- ///

// let sym = Symbol('description')


// ---- Hoisting ---- //

// var a
// console.log(a)   // Undefined - Output

// var a=10
// console.log(a)   // 10 - Output


// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "light") {
//     color = "White";
// }

// console.log(color);  // Output: black


var age = Number(prompt("Enter your age:"));

if (age > 18 && age < 32) {
    console.log("You can go to OYO.");
} else if (age > 50) {
    console.log("Why are you going to OYO? Viagra doesn't work on you.");
} else {
    console.log("Pogo dekho beta, jaake.");
}
