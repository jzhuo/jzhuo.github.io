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

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
                });
        } // End if
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
