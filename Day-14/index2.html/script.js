// const arr  = [4,5,7,8,9,6,5,9,]

// arr.forEach(function (e, idx){
//     console.log(e, idx)                              // Foreach s basically use for iteration
//                                                      // e gives the original value and idx gives thier index value
// });

//  # Array of Objects :

const arr = [
  {
    name: "krishna",
    age: 25,
    married: false,
    image:
      "https://media.istockphoto.com/id/2152439466/photo/natural-hair-care-portrait-of-young-woman-in-exotic-tropical-foliage.webp?a=1&b=1&s=612x612&w=0&k=20&c=7dBHad_5xYfgueHV4PY8QIXFr7WFSdExWPQfTrtaHXM=",
  },
  {
    name: "krish",
    age: 25,
    married: true,
    image:
      "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    name: "Annu",
    age: 22,
    married: false,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww",
  },
];

console.log(arr);

let sum = '';
arr.forEach(function (e) {
  sum += `
    <div class="card">
        <img src="${e.image}" alt="">
        <h1>${e.name}</h1>
        <h5>${e.age}</h5>
        <h3>Married : ${e.married}</h3>
    </div>`
});

const body = document.querySelector('body')
body.innerHTML = sum;

// Question : Make a program to calcualte the age of all members

// const arr = [
//   { name: "krishna", age: 25, married : false },
//   { name: "krish", age: 25,married : true },
//   { name: "Annu", age: 5,married : false },
// ];

// console.log(arr);

// let sum = 0
// arr.forEach(function(e){
//   sum = sum+e.age
// })

// console.log(sum)

// ##
