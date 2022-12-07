const hamburger = document.querySelector('.hamburger-menu-cont .hamburger');
const nav = document.querySelector('.nav-btn');

hamburger.addEventListener('click' , ()=>{
    hamburger.classList.toggle('mobile');
    nav.classList.toggle('show');
})