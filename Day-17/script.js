const addCardBtn = document.querySelector('.add-card') // ✅ target correct button
const container = document.querySelector('.container')


let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})

  container.addEventListener('click',(e)=>{
if(e.target !== container){
e.target.remove()
}
  })