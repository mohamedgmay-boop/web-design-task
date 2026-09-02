// let h1_Elements = document.getElementsByTagName("h1") // HTMLCollection - special object

// h1_Elements.testProperty = "test"

// console.log(h1_Elements)

// let classElements = document.getElementsByClassName('text-danger')

// console.log(classElements)
// console.log(classElements[1])
// classElements[1].innerText = "Web design Creativa 25/7"

// console.log(classElements[1].innerText)



// for(let i = 0 ; i < classElements.length ; i++){
//     // classElements[i].innerText = "bla bla bla"
//     classElements[i].innerHTML = "<mark>Lorem ipsum dolor sit amet.</mark>"
// }

// let h2Element = document.getElementById('h2_ID') // object

// console.log(h2Element)
// h2Element.style.color = "blue"
// h2Element.style.backgroundColor = "#eee"
// h2Element.style.border = "3px solid"
// h2Element.style.padding = "3%"


// let span = document.querySelector('.custom-card .text-success span')
// console.log(span)

// let card = document.querySelector('.custom-card') // object
// console.log(card)

// let spanElements = document.querySelectorAll('.custom-card .text-success span') // NodeList 

// console.log(spanElements)


// spanElements.forEach((item)=>{
//     item.innerText = "Web Design JS"
// })



let selectLink = (element)=>{
    let navLinks = document.querySelectorAll('ul.fs-2 li')
    navLinks.forEach((item)=>{
        item.classList.remove('bg-primary', 'text-white')
    })
    element.classList.add('bg-primary', 'text-white')
}