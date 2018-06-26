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
    // This is the js for toggle bamburger menu dropdown
    // *****************************************************
    
    var navLinks = navBar.find(".navbar-collapse ul li a");

    $.each( navLinks, function( i, val ) {

      var navLink = $(this);

        navLink.on('click', function (e) {
          navBar.find(".navbar-collapse").collapse('hide');
        });

    });
    
});
