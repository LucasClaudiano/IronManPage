const menu = document.querySelector('.menu__burger__item'); 
const links = document.querySelector('.header__links')
function active (){
    menu.classList.toggle('active');
    links.classList.toggle('opacity');
}

menu.addEventListener('click', active);