$(document).ready(function(){
    $(".logo-icon-bottom").click(function(){
        $(".menu").slideToggle(1000)
    });
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