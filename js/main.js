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
            $('.hover_link').addClass('passive_link'); // add passive_link class to all hover links
            $('.active_link').removeClass('active_link'); // remove currently active element
            $(this).removeClass("passive_link");
            $(this).addClass("active_link"); //then make current link as active
        } // End if
    });
    
});

var top1 = $('#Home').offset().top;
var top2 = $('#Education').offset().top;
var top3 = $('#Experience').offset().top;
var top4 = $('#Projects').offset().top;
var top5 = $('#Skills').offset().top;
var top6 = $('#Acknowledgements').offset().top;
var top7 = $('#Contact').offset().top;

$(document).scroll(function() {
    var scrollPos = $(document).scrollTop();
    if (scrollPos >= top1 && scrollPos < top2) {
        $('.active_link').addClass('passive_link'); // remove currently active element
        $('.active_link').removeClass('active_link'); // remove currently active element
        $('#Home').removeClass("passive_link");
        $('#Home').addClass("active_link"); //then make current link as active  
    } else if (scrollPos >= top2 && scrollPos < top3) {
        $('.active_link').addClass('passive_link'); // remove currently active element
        $('.active_link').removeClass('active_link'); // remove currently active element
        $('#Education').removeClass("passive_link");
        $('#Education').addClass("active_link"); //then make current link as active
    } else if (scrollPos >= top3 && scrollPos < top4) {
        $('.active_link').addClass('passive_link'); // remove currently active element
        $('.active_link').removeClass('active_link'); // remove currently active element
        $('#Experience').removeClass("passive_link");
        $('#Experience').addClass("active_link"); //then make current link as active
    } else if (scrollPos >= top4 && scrollPos < top5) {
        $('.active_link').addClass('passive_link'); // remove currently active element
        $('.active_link').removeClass('active_link'); // remove currently active element
        $('#Projects').removeClass("passive_link");
        $('#Projects').addClass("active_link"); //then make current link as active
    } else if (scrollPos >= top5 && scrollPos < top6) {
        $('.active_link').addClass('passive_link'); // remove currently active element
        $('.active_link').removeClass('active_link'); // remove currently active element
        $('#Skills').removeClass("passive_link");
        $('#Skills').addClass("active_link"); //then make current link as active
    } else if (scrollPos >= top6 && scrollPos < top7) {
        $('.active_link').addClass('passive_link'); // remove currently active element
        $('.active_link').removeClass('active_link'); // remove currently active element
        $('#Acknowledgements').removeClass("passive_link");
        $('#Acknowledgements').addClass("active_link"); //then make current link as active
    } else if (scrollPos >= top7) {
        $('.active_link').addClass('passive_link'); // remove currently active element
        $('.active_link').removeClass('active_link'); // remove currently active element
        $('#Contact').removeClass("passive_link");
        $('#Contact').addClass("active_link"); //then make current link as active
    }
});
