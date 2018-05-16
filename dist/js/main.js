$(function () {
    'use strict';

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('#toggle').toggleClass('on');
        $('.offcanvas-collapse').toggleClass('open')
    })
});

// window.onscroll = function() {myFunction()};
//
// var header = document.querySelector(".navbar.fixed-top");
// var sticky = header.offsetTop;
//
// function myFunction() {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }