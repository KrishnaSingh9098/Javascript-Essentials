const myNameTag = document.querySelector('.name-tag');
const ageTag = document.querySelector('.age-tag');

const nameInput = document.querySelector('.name');
const ageInput = document.querySelector('.age');

// // Load name and age from localStorage when page loads
// nameInput.value = localStorage.getItem('myName') || '';
// ageInput.value = localStorage.getItem('myAge') || '';
// myNameTag.innerHTML = nameInput.value;

// // Save name on input
// nameInput.addEventListener('input', (e) => {
//   const name = e.target.value;
//   myNameTag.innerHTML = name;
//   localStorage.setItem('myName', name);
// });

// // Save age on input
// ageInput.addEventListener('input', (e) => {
//   const age = e.target.value;
//   localStorage.setItem('myAge', age);
// });


const myData = JSON.parse(localStorage.getItem('myData')|| {})

nameInput.addEventListener('input', (e)=>{
  myData.myName = e.target.value;
  localStorage.setItem('myData', JSON.stringify(myData))
  myNameTag.innerHTML = e.target.value;
})


ageInput.addEventListener('input', (e)=>{
  myData.age = e.target.value;
  localStorage.setItem('myData', JSON.stringify(myData))
  ageTag.innerHTML = e.target.value
})


ageInput.innerHTML= myData.ageTag
nameInput.innerHTML = myData.myName