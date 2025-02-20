jQuery(document).ready(function ($) {
    'use strict';

    $(function () {
        $('#tabs').tabs();
    });

    // Page loading animation

    $('#preloader').animate(
        {
            opacity: '0',
        },
        600,
        function () {
            setTimeout(function () {
                $('#preloader').css('visibility', 'hidden').fadeOut();
            }, 300);
        },
    );

    if ($('.owl-testimonials').length) {
        $('.owl-testimonials').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                460: {
                    items: 1,
                    margin: 0,
                },
                576: {
                    items: 2,
                    margin: 20,
                },
                992: {
                    items: 2,
                    margin: 30,
                },
            },
        });
    }
    if ($('.owl-partners').length) {
        $('.owl-partners').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                460: {
                    items: 1,
                    margin: 0,
                },
                576: {
                    items: 2,
                    margin: 20,
                },
                992: {
                    items: 4,
                    margin: 30,
                },
            },
        });
    }

    $('.Modern-Slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        // fade:true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
    });
});
