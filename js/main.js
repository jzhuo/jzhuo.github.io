/*global $, jQuery, alert*/
$(document).ready(function () {

    'use strict';

    // *****************************************************
    // This is the js for dynamic text
    // *****************************************************
    
    var typed = $(".typed");

    $(function () {
        typed.typed({
            strings: [
                "Student.",
                "Developer.",
                "Researcher."
            ],
            typeSpeed: 250,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });
    });
    
    // *****************************************************
    // This is the js for swapping active classes
    // *****************************************************

//     var sections = $('.body_page_sections'),
//         navList = navBar.find("#mb-navbar.navbar-nav");

//     function swapActive() {
//         top = allWindow.scrollTop();
//         $.each(sections, function(i,val) {
//             var section_page = $(this);
//             var bottom = section_page.height() + section_top;
//             section_top = section_page.offset().top - 10,
//             if (top <= bottom && top >= section_top) {
//                 var naItems = navList.find('li');
//                 $.each(naItems ,function(i,val) {
//                     var item = $(this);
//                     item.find("a").removeClass("active");
//                 });
//                 navList.find('li [href="#' + section_page.attr('id') + '"]').addClass('active');
//             }
//         });
//     }
    
    // *****************************************************
    // This is the js for toggle bamburger menu dropdown
    // *****************************************************
    
//     var navLinks = navBar.find(".navbar-collapse ul li a");

//     $.each( navLinks, function( i, val ) {

//       var navLink = $(this);

//         navLink.on('click', function (e) {
//           navBar.find(".navbar-collapse").collapse('hide');
//         });

//     });
    
});
