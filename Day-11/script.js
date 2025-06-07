const input = document.querySelector('#username')
const paragragh = document.querySelector("p")
const form = document.querySelector("form")

// input.addEventListener('click', function(){
//     console.log('Input Clicked')
// })

// input.addEventListener('dblclick', function(){
//     console.log('Input dblClicked')
// })

// let inputValue ;

// input.addEventListener('input', function(e){
//     paragragh.innerText = e.target.value
//     inputValue  = e.target.value
// })


// let inputValue ;

// input.addEventListener('change', function(e){
//     paragragh.innerText = e.target.value
//     inputValue  = e.target.value
// })


let inputValue ;

input.addEventListener('change', function(e){
    console.log(e.type)
    paragragh.innerText = e.target.value
    inputValue  = e.target.value
})



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e)
})