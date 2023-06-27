$(document).ready(function(){
    const toggleBtn = document.querySelector(".show");
    const toggleBtnIcon = document.querySelector(".show i");
    const dropDownMenu = document.querySelector(".menu");
    toggleBtn.onclick = function(){
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars-staggered'
    }
    $(".owl-carousel-5").owlCarousel({
        items:3,
        loop:true,
        margin:15,
        autoplay:true,
        responsiveClass:true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:1
            },
            992:{
                items:2
            },
            1100:{
                items:3
            }
        }
    });
});