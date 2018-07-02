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
            typeSpeed: 100,
            backDelay: 3000,
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
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $(this).removeClass("passive_link");
            $(this).addClass("active_link");
        } // End if
    });
    
    // *****************************************************
    // This is the js for dynamic scoll nav bar anchor links
    // *****************************************************
    
    $(document).scroll(function(){
        // defining a set list of positions
        var topPosition = $(".nav").offset().top();
        var section1 = $("#Home").scrollTop();
        var section2 = $("#Education").scrollTop();
        var section3 = $("#Experience").scrollTop();
        var section4 = $("#Projects").scrollTop();
        var section5 = $("#Skills").scrollTop();
        var section6 = $("#acknowledgements_anchor_link").scrollTop();
        var section7 = $("#Contact").scrollTop();
        
        // comparing scroll positions and swapping classes
        if(topPosition >= section1){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $("#home_link").removeClass("passive_link");
            $("#home_link").addClass("active_link"); 
        } else if (topPosition >= section2) {
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $("#education_link").removeClass("passive_link");
            $("#education_link").addClass("active_link"); 
        }
    })
    
});
