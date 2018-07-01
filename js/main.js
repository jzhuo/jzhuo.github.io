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

    $(document).scroll(function () {
   //get document scroll position
     var position = $(document).scrollTop(); 
     //get header height
     var header = $('nav').outerHeight();
     
     //check active section
     $('.body_page_sections').each(function(i) {
         if($(this).position().top <= (position + header))
          {
               $("a.active").removeClass('active_link');
               $("a").eq(i).addClass('active_link');
          }
      });
   });
    
});
