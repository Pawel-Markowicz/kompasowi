const nav = document.querySelector('.nav-hamburger');
const hamburger = document.querySelector('.hamburger');
const menuItems = document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    nav.classList.toggle('nav-active');

    menuItems.forEach(item =>{
        item.addEventListener('click', () => {
            nav.classList.remove('nav-active')
        })
    })
}

const handleYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}



hamburger.addEventListener('click', handleNav);
handleYear ();