window.addEventListener('load', function(){
    const navToggler = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('.navbar-mobile-wrapper');
    const label = document.querySelector('.navbar-form label');

   

    navToggler.addEventListener('click', function(){
        mobileMenu.classList.toggle('show');
    })
});