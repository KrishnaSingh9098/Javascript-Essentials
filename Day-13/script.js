const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let i=1;

// card.addEventListener('click',function (e){
//     console.log(e)
//   console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = `card${i}`;
//       i++

//       document.body.append(newCard);
//       container.append(newCard)
// })







// card.addEventListener('mousedown',function (e){
//     console.log(e)
//   console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = `card${i}`;
//       i++

//       document.body.append(newCard);
//       container.append(newCard)
// })



// card.addEventListener('mouseup',function (e){
//     console.log(e)
//   console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = `card${i}`;
//       i++

//       document.body.append(newCard);
//       container.append(newCard)
// })





// card.addEventListener('mouseenter',function (e){
//     console.log(e)
//   console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = `card${i}`;
//       i++

//       document.body.append(newCard);
//       container.append(newCard)
// })





// card.addEventListener('mouseleave',function (e){
//     console.log(e)
//   console.log("CARD WAS CLICKED AND ITS MADE A NEW CARD")
  
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = `card${i}`;
//       i++

//       document.body.append(newCard);
//       container.append(newCard)
// })






// card.addEventListener('mousemove',function (e){
//     console.log(e)
//   console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
//       const newCard = document.createElement("div");
//       newCard.className = "card";
//       newCard.textContent = `card${i}`;
//       i++

//       document.body.append(newCard);
//       container.append(newCard)
// })






card.addEventListener('mouseout',function (e){
    console.log(e)
  console.log("CARD WAS CLICKED AND ITS MADE A NW CARD")
  
      const newCard = document.createElement("div");
      newCard.className = "card";
      newCard.textContent = `card${i}`;
      i++

      document.body.append(newCard);
      container.append(newCard)
})
