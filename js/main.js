const nav = document.querySelector('.nav-hamburger');
const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelectorAll('.nav__link');

const handleNav = () => {
    nav.classList.toggle('nav-active');

    menuItems.forEach(item =>{
        item.addEventListener('click', () => {
            nav.classList.remove('nav-active')
        })
    })
}


hamburger.addEventListener('click', handleNav);