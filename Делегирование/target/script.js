let elem1 = document.querySelector('#elem1')

elem1.addEventListener('click', (e) => {
    let curTarg = e.target
    console.log(curTarg)
})