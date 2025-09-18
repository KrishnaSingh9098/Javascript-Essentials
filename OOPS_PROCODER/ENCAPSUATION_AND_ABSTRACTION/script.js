const user = {
    firstName : 'Krishna',
    lastName:'singh',
    age:'22',
    getAgeYaer :
    function ageYear(){
    return new Date().getFullYear() - user.age;
}
}

//Yah ek purana tarika hai objects bnane ka ek constructor function se  jab javascript mein class ka concept nhi tha 

// function Ghar() {
//   this.city = 'Delhi';
//   this.rooms = 3;
//   this.hall = 2;
//   this.bathroom = 2;
//   this.tv = 1;
// }

// let ghar1 = new Ghar();
// console.log(ghar1);


//-------------------------------------------------------------------------------------------------------------------------------


function Toffee(flavour,price,expiry){
    this.flavour = flavour;
    this.price = price;
    this.expiry=expiry;

}

let t1 = new Toffee("Chocolate", 1.99, "12-05-2022");
let t2 = new Toffee("vanilla", 2.99, "12-05-2023");



// ## CLass without parameter 
// class Toffe{
//     //har class banate hi pehli cheej jo bnate hai uski aadat dal lo uska naam hai constructor .
//     constructor(){
//         this.name = "choco lele";
//         this.flavour = 'chocolate';
//         this.color = 'brown';
//         this.weight= '0.5gm';
//         this.ingredients = ["walnuts", 'almonds', 'cashews', 'dragonfruit', 'kismiss'];
//         this.expiry = "2025"
//     }
// }

// let t3 = new Toffe();


//# CLASS WITH PARAMETER OR METHOD : 


class Toffe {
    constructor(name, flavour, color, weight, expiry) {
        this.name = name;
        this.flavour = flavour;
        this.color = color;
        this.weight = weight;
        this.expiry = expiry;

        // Ingredients same sab ke liye
        this.ingredients = ["walnuts", 'almonds', 'cashews', 'dragonfruit', 'kismiss'];
    }

    describe() {
        console.log(`${this.name} is a ${this.flavour}-flavored toffee of color ${this.color}, weighs ${this.weight}, and expires in ${this.expiry}, and which includes ingredients like ${this.ingredients}.`);
    }
}

let t4 = new Toffe("Choco Boom", "Chocolate", "Dark Brown", "1gm", "2026");
let t5 = new Toffe("Fruity Bite", "Strawberry", "Pink", "0.8gm", "2025");

console.log(t4);
t4.describe();

console.log(t5);
t5.describe();



// STEP : 2 BY USING PROTOTYPE : 

// function Car(name) {
//     this.name = name;
// }

// // Method ko prototype pe add karo (better memory)
// Car.prototype.drive = function() {
//     console.log(`${this.name} is driving`);
// };

// const car1 = new Car("BMW");
// car1.drive(); // BMW is driving


function Human(name, age, isHandsome) {
    this.name = name;
    this.age = age;
    this.isHandsome = isHandsome;
}

Human.prototype.sayHello = function() {
    console.log(`Hello laude ${this.name}`);
};

let h1 = new Human("Harsh", 28, true);
let h2 = new Human("Sarthak", 22, false);

// Test
h1.sayHello(); // Output: Hello laude Sejal
h2.sayHello()
