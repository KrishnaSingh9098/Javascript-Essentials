const addCardBtn = document.querySelector('.add-card') // ✅ target correct button
const container = document.querySelector('.container')
const input = document.querySelector("input")
const form = document.querySelector("form")

let count = 1

addCardBtn.addEventListener('click', () => {
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.innerText = count++
  container.append(newCard)
})


// const intervalId = setInterval(()=>{
//     if(count >=1000){
//         clearInterval(intervalId)
//     }
//     addCardBtn.click()
// },10)



setTimeout(()=>{
     input.focus()
},2000)


setTimeout(()=>{
     input.blur()
},3000)


setTimeout(()=>{
    form.submit()
    console.log("Form SUBmitted")
},3500)



form.reset();