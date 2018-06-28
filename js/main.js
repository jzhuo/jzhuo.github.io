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
                "Developer.",
                "Researcher.",
                "Student."
            ],
            typeSpeed: 250,
            backDelay: 2000,
            loop: true,
            showCursor: false
        });
    });
    
    // *****************************************************
    // This is the js for navigation bar link scrolling
    // *****************************************************
    
    // Select all links with hashes
    $('a.scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, speed);
          }
        }
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
   
    
});
