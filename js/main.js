const icon = document.querySelector('.fa-bars');
const menu = document.querySelector('.nav-menu');

icon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
})