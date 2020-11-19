window.addEventListener('load', function(){
    const navToggler = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('.navbar-mobile-wrapper');
    const label = document.querySelector('.navbar-form label');
    const dropDowns = document.querySelectorAll('.dropdown');
    const dropOverlay = document.querySelector('.dropdown-overlay');
    const subnavProfile =   document.querySelector('.subnav-profile');
    const subnav =   document.querySelector('.subnav');
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


    window.addEventListener("scroll", function() {
        var top = this.scrollY;
        if(top > 312){
            subnavProfile.classList.add('active');
            subnav.classList.add('upped');
            // console.log('done');
        }else{
            subnav.classList.remove('upped');
            subnavProfile.classList.remove('active');

        }
    });
});