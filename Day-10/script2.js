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
      newCard.textContent = "CARD";
      document.body.append(newCard);
      container.append(newCard)
})



// THis cod make a 50card on a single click 




// card.addEventListener('click',function (){
//   console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
//   for(let i=1;i<=50;i++){
    
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = i;
//     //   document.body.append(newCard);
//       container.append(newCard)
//   }
// })



// With this cod it wwill prints one div on a single click and with thtir counting :


// let i=1;

// card.addEventListener('click',function (){
//   console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = `card${i}`;
//       i++

//       document.body.append(newCard);
//       container.append(newCard)
// })





// h1.addEventListener('click', sayHi) 


container.addEventListener('click', function (){
    console.log("HELL BABY")
})



