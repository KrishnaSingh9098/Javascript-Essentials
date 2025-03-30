// console.log("HELLO WORLD")  

// // let a=121,12;  // You didn't do this with Variable. This is not allows .

// // You have to make an array by using [].

// var i = [12,45,65,44,78,45,98];

// let heroes = ["Iron Man", 'Hulk', "Thor", "batman"]
// let Marks = [96,97,98,99,100]
// let info = ["rahul", 86,"Delhi"]

// // let marks = [96,97,98,99,100]
// // console.log(marks)
// // console.log(marks.length)

// let marks = [96, 97, 98, 99, 100];
// console.log(marks);
// console.log(marks.length);

// // Loop through the array
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i]); // Print the value at index i
//     if (i >= marks.length) {
//         break; // Break the loop if i is greater than or equal to the length of the array
//     }
// }



// // Looping Over an Array : 
  

// let  Hero = ["Iron Man", 'Hulk', "Thor", "batman"]
// for(let i=0;i<=Hero.length;i++){                     
//     console.log(Hero[i]);
// }

// // OUTPUT : Iron Man ,Hulk ,Thor ,Batman, Undefined


// // The loop condition i <= Hero.length will cause an "out of bounds" error because array indices in JavaScript are zero-based. 
// // The last valid index for the array is Hero.length - 1, so when i becomes equal to Hero.length, it will attempt to access
// //  Hero[Hero.length], which is undefined.


// let  ero = ["Iron Man", 'Hulk', "Thor", "batman"]
// for(let i=0;i<Hero.length;i++){                     
//     console.log(Hero[i]);
// }

// // OUTPUT :  Iron Man ,Hulk ,Thor ,Batman


// //The loop starts with i = 0 (the first index) and continues as long as i is less than the length of the Hero array (Hero.length).

// //  Each iteration prints the value of Hero[i] at that index.

// let arr45 =  [12, "KRishna", true]               // Why returns Object 
// console.log(typeof(arr45))

// var arrt = [1,2,4,5,6,7]
// console.log(arrt[0])


// let arr = [1,2,3,4,5]
// console.log(arr[1])               // Output : Undefined

// let arrr = new Array(30)
// console.log(arrr)
// arrr[0] = 12
// arrr[1] = 22
// arrr[2] = 32
// arrr[3] = 42
// arrr[4] = 52

// console.log(arrr)

// console.log(arrr.length)

// for(var i=0;i<30;i++){
//     arrr[i]=i;   // The loop Start from the 0 and ends at the 100 But loop first goes throw 29 i<30 then when it comes to 
// }                // print it  prints value from one to 29 and then empty array .
// console.log(arrr)  // Prints the loop values as  well as the another values.


// let arr = [1,2.4,3,"Krishna",true, function (){}, NaN,{}]

// console.log(arr);




// OBJECTS IN ARRAYS //

// JavaScript mein object ek data structure hai jo key-value pairs ke form mein data ko store karta hai. 
// Har key (jo property kehlata hai) ek string hota hai, aur uske saath jo value hoti hai, wo koi bhi data 
// type ho sakti hai—number, string, array, ya phir ek aur object.

// var a = {}

// var obj = {
//     name : "Krishna",
//     age:"22",
//     email:"singharush@13lelegmail.com",
//     isHandsome:"false",
//     isVeryHandsome:"True"
// }

// console.log(obj)

// function Car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//  }

// let myCar = new Car("Toyota", "Corolla", 2020, "red");
// console.log(myCar)


var obj = new Object()
obj.name = "Car"
obj.seat = 4
obj.engine = "24 Horse Power Engine"
obj.speed = 75
console.log(obj)

Object.freeze(obj)  // Freeze the object
console.log(Object.isFrozen(obj))  // Output: true (to check if the object is frozen)

//After these Two line below line code not work due to the freeeze Object.

obj.classic = "Defender"  // This won't work because obj is frozen
console.log(obj)  // Output: { name: 'Car', seat: 4, engine: '24 Horse Power Engine', speed: 75 }


// WHY OBJECT : Jab bhi aapko Ek hi cheej ki shaari value chahiye ho tab hum Objects use krte hai.
// When you want to store the info of oNe entity.

// Jab bhi . lagega Dot . ke just pehle object hoga .







