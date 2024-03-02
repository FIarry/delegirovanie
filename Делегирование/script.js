//  event.stopPropagation() - препятствует продвижению события дальше
//  но на текущем элементе все обработчики обрабатывают.

//  event.stopImmediatePropagation() - предотвращает всплытие и
//  останавливает обработку событий на текущем элементе.
let elem1 = document.getElementById('elem1')
let elem2 = document.getElementById('elem2')
let elem3 = document.getElementById('elem3')

elem1.addEventListener('click', function (event) {
    console.log('Зеленый-пагружэние');
}, true);

elem1.addEventListener('click', function (event) {
    console.log('Зеленый-фсплытиэ');
}, false);

elem2.addEventListener('click', function (event) {
    console.log('Фиолетовый-пагружэниэ');
    event.stopImmediatePropagation()
}, true);

elem2.addEventListener('click', function (event) {
    console.log('Фиолетовый-фсплытиэ');
}, false);


elem3.addEventListener('click', function (event) {
    console.log('Розовый-пагрузчик');
}, true);

elem3.addEventListener('click', function (event) {
    console.log('Розовый-фсплытие');
}, false);



















let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block = document.querySelector('#block');
button.addEventListener('click', (event) => {
    block.classList.add('active');
    event.stopPropagation()
})
parent.addEventListener('click', (event) => {
    block.classList.remove('active');
    event.stopPropagation()
})


