// Creatina a Random Number between Two Specific numbers 

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomFloat(10, 20)); // 10 se 20 ke beech random decimal


const width = prompt('please enter wdth')
const height = prompt('please enter height')
const areaOfRectangel = width*height
console.log(areaOfRectangel)