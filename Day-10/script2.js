const h1 = document.querySelector("h1")
const container = document.querySelector(".container")
 function sayHi(){
    console.log("Ello Baby")
}

// Select the card element
const card = document.querySelector('.card');

// // Add an onclick event listener
// card.onclick = function () {
//   console.log("Hello World");
// };



// card.ondblclick = function () {
//   console.log("Hello World");
// };

card.addEventListener('click',function (){
  console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.textContent = "New Card";
      document.body.append(newCard);
})



// h1.addEventListener('click', sayHi) 


container.addEventListener('click', function (){
    console.log("HELL BABY")
})



