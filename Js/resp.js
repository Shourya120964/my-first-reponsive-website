burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
NavList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    NavList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})