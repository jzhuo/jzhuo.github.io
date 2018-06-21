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

});
