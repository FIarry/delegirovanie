let block = document.querySelector('#block')
let elements = document.querySelectorAll('.element')
let links = document.querySelectorAll('.element__link')

for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.parentElement.style.backgroundColor = 'green'
        console.log(link.getAttribute('href'))
    })
}

block.addEventListener('click', (e) => {
    let curTarg = e.target
    for (let element of elements) {
        element.classList.remove('active')
    }
    curTarg.classList.add('active')
})