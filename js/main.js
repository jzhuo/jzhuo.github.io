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
    
});

$(document).scroll(function () {
        //get document scroll top position
        var top = $(window).scrollTop();
        
        // defining the set of section page positions
        var section1 = $('#Home').position().top;
        var section2 = $('#Education').position().top;
        var section3 = $('#Experience').position().top;
        var section4 = $('#Projects').position().top;
        var section5 = $('#Skills').position().top;
        var section6 = $('#acknowledgements_anchor_link').position().top;
        var section7 = $('#Contact').position().top;
     
        //check active section
        if (top >= section1){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $('#home_link').removeClass("passive_link");
            $('#home_link').addClass("active_link");
        } else if (top >= section2){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $('#education_link').removeClass("passive_link");
            $('#education_link').addClass("active_link");
        } else if (top >= section3){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $('#experience_link').removeClass("passive_link");
            $('#experience_link').addClass("active_link");
        } else if (top >= section4){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $('#projects_link').removeClass("passive_link");
            $('#projects_link').addClass("active_link");
        } else if (top >= section5){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $('#skills_link').removeClass("passive_link");
            $('#skills_link').addClass("active_link");
        } else if (top >= section6){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $('#acknowledgements_link').removeClass("passive_link");
            $('#acknowledgements_link').addClass("active_link");
        } else if(top >= section7){
            $('.hover_link').addClass('passive_link');
            $('.active_link').removeClass('active_link');
            $('#contact_link').removeClass("passive_link");
            $('#contact_link').addClass("active_link");
        }
        
});
