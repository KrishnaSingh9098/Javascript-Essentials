const container = document.querySelector('.container');
const card = document.querySelector('.card');
const h1 = document.querySelector('h1')


// const forstImg = document.querySelector("img")



// for(let i=2;i<=100;i++){
//     const newImg = forstImg.cloneNode()
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     container.append(newImg)
// }


// const p = document.createElement("p")

// Hre we ar cloning first thn we append 

// p.innerText = 'Hello'
// p.classList.add("my-paragragh")
// container.append(p)
// p.append("HEllo")


// Here we are not cloning we ar making and elment
// Without Counting on images method 
// for(let i=2;i<=100;i++){
//     const img =document.createElement('img')
// img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
// container.append(img)
// }



// With Counting on images method  : 


for(let i = 1;i<=100;i++){
    const imageContainer = document.createElement("div")
imageContainer.classList.add('img-container')
const imgnew = document.createElement("img")
imgnew.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
const para = document.createElement("p")
para.innerText = i

imageContainer.append(imgnew,para)
container.append(imageContainer)
}


const myImg = document.querySelector("body > div > div:nth-child(5)")





// removeChild ko parnt kr uper call krna hota hai .