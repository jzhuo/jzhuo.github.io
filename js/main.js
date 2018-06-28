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
    // This is the js for navigation bar link scrolling and swapping active classes
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
            $(a).removeClass("active_link");// Nake all the existing links inactive by removing class active
            $(this).removeClass("passive_link");
            $(this).addClass("active_link"); //then make current link as active
        } // End if
    });
    
});
