const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


green.addEventListener('click',function(){
    console.log("Green event Listener")
},true)
pink.addEventListener('click',function(){
    console.log("Pink event Listener")
},true)
blue.addEventListener('click',function(e){
    e.stopPropagation()
    console.log("Blue event Listener")
},true)
document.body.addEventListener('click',function(){
    console.log("Body event Listener")
}, true)
document.addEventListener('click',function(){
    console.log("Document event Listener")
},true)

window.addEventListener('click',function(){
    console.log("Window event Listener")
},true)



// Another ONE Example : 

document.getElementById('parent').addEventListener('click', function() {
    alert('Parent clicked!');
  });

  document.getElementById('child').addEventListener('click', function(e) {
    e.stopPropagation(); // bubbling ko yahin rok deta hai
    alert('Button clicked!');
  });