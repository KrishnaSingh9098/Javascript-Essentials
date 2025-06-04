const container = document.querySelector('.container');
const card = document.querySelector('.card');
const h1 = document.querySelector('h1')



// # Anothr example of appndChild


// const newdicv = document.createElement('div')
// newdicv.textContent  = 'HELOO BHAGTI CHOR KE LANGOTI'

// const contain = document.querySelector('#contain')

// contain.appendChild(newdicv)




// ## cloneNode

// container.appendChild(h1.cloneNode(true))


// const newCard = card.cloneNode()
// newCard.innerText = "2"
// container.appendChild(newCard)



// for(let i =2 ;i<=100;i++){
//     const newCard = card.cloneNode()
// newCard.innerText = i
// container.appendChild(newCard)
// newCard+1
// }





// Appnd Started : 

const newdiv = document.getElementById("myDiv")
const text = document.createTextNode("HEllo WORLD")
const op = newdiv.append(text)
console.log(op)