window.addEventListener('load', function(){
    const navToggler = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('.navbar-mobile-wrapper');
    const label = document.querySelector('.navbar-form label');
    const dropDowns = document.querySelectorAll('.dropdown');
    const dropOverlay = document.querySelector('.dropdown-overlay');
    dropOverlay.addEventListener('click', function(){
        disableDropDowns();
    });
    
    function disableDropDowns(){
        dropDowns.forEach(function(drops){
            let menu =  drops.querySelector('.dropdown-menu');
            menu.classList.contains('show') ? menu.classList.remove('show') : '';
        })
        dropOverlay.classList.remove('show');
    }
    dropDowns.forEach(function(dropDown){
        dropDown.querySelector('.dropdown-toggle').addEventListener('click', function(){
            dropOverlay.classList.add('show');
            dropDown.querySelector('.dropdown-menu').classList.toggle('show');
        })
    })



   

    navToggler.addEventListener('click', function(){
        mobileMenu.classList.toggle('show');
    })
});