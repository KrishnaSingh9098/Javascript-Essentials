console.log(window)

//                                                     DOM MANIPULATION

var h1 = document.querySelector('h1')
console.log(h1)

//                                                      EVENT LISTENERS

h1.addEventListener('click',function(){
    console.log('hey guuys')
    h1.innerHTML = "Vartamaan Ankho k dhoka hai"
     h1.style.fontSize = "100px"
h1.style.color = "green"
h1.style.backgroundColor = "#45aff5"
})




// Select the h1 element by ID
const heading = document.querySelector('#main-heading');
heading.textContent = 'Hello from querySelector!';

// Select the paragraph element by class
const paragraph = document.querySelector('.description');
paragraph.style.color = 'blue';



// Select all elements with the class "item"
const items = document.querySelectorAll('.item');

// Loop through each item and change its text color
// items.forEach((item, index) => {
//   item.style.color = 'green';
//   item.textContent = `Updated Item ${index + 1}`;
// });

items[0].innerHTML = "Helllo Sexy Lady"



let b=document.querySelector("#box")
console.log(b)
// b.textContent="<h1>HELLO GUYS</>"
 b.innerHTML = 'changed'


