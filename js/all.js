$(document).ready(function () {

    $('.show-menu').click(function (e) { 
        e.preventDefault();
        $('.menu').toggleClass('open');
    });
    $('.top').click(function (e) { 
        e.preventDefault();
        $("html, body").animate({
             scrollTop: 0 
        }, "2000");     
    });
    $('.hamburger li a').click(function (e) { 
        e.preventDefault();
        $(this).toggleClass('active');
    });

});