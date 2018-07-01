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
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $(this).removeClass("passive_link");
            $(this).addClass("active_link"); //then make current link as active
        } // End if
    });

    $(window).scroll(function(){
       if ($(window).scrollTop() >= $('#Home').height()){
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $('#home_link').removeClass("passive_link");
            $('#home_link').addClass("active_link"); //then make current section link as active
        } else if ($(window).scrollTop() >= $('#Education').height()){
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $('#education_link').removeClass("passive_link");
            $('#education_link').addClass("active_link"); //then make current section link as active
        } else if ($(window).scrollTop() >= $('#Experience').height()){
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $('#experience_link').removeClass("passive_link");
            $('#experience_link').addClass("active_link"); //then make current section link as active
        } else if ($(window).scrollTop() >= $('#Projects').height()){
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $('#projects_link').removeClass("passive_link");
            $('#projects_link').addClass("active_link"); //then make current section link as active
        } else if ($(window).scrollTop() >= $('#Skills').height()){
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $('#skills_link').removeClass("passive_link");
            $('#skills_link').addClass("active_link"); //then make current section link as active
        } else if ($(window).scrollTop() >= $('#acknowledgements_anchor_link').height()){
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $('#acknowledgements_link').removeClass("passive_link");
            $('#acknowledgements_link').addClass("active_link"); //then make current section link as active
        } else if($(window).scrollTop() >= $('#Contact').height()){
            var activeLink = $('.active_link');
            activeLink.removeClass('active_link'); // remove currently active element
            activeLink.addClass('passive_link'); // add passive_link class to all hover links
            $('#contact_link').removeClass("passive_link");
            $('#contact_link').addClass("active_link"); //then make current section link as active
        }

    });
    
});
