const burger = document.querySelector('#burger-btn');
const menu = document.querySelector('#menu');

burger.addEventListener('click', ()=> {
    menu.classList.toggle('disp')
});