// This is my 7th day of 7 days JS Workshop.
// DOM (Dcoument Object Model)
// Tag and Element
// Element is the whole tag and content.

// const h2 =  document.querySelector('.firstClass')
// h2.textContent = "After"
// const h3 =  document.querySelector('#firstId')

// function newText(){
//     h3.textContent = "Girlfriend na hune pani handsome"
// }
// function oldText(){
//     h3.textContent = "Hello Handsome"
// }

const button = document.getElementsByTagName('button')[0]
button.addEventListener('click', function () {
    let newParagraph = document.createElement('p')
    newParagraph.style.color = "white"
    newParagraph.textContent = "Hi ! I am a new paragraph and I was just created by you."
    document.body.appendChild(newParagraph)
})


// Day 7 Code ends here.
// Thank You Digital Pathshala 