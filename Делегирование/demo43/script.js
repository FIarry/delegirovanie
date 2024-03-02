let elem1 = document.querySelector("#elem1")
let elem2 = document.querySelector("#elem2")
let elem3 = document.querySelector("#elem3")

elem1.addEventListener('click', () => {
    console.log('green')
})
elem2.addEventListener('click', (e) => {
    console.log('blue - 1 обработчик')
    e.stopImmediatePropagation()
})
elem2.addEventListener('click', () => {
    console.log('blue - 2 обработчик')
})

elem3.addEventListener('click', () => {
    console.log('pink')
})