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
    // This is the js for smoother anchor link scrolling
    // *****************************************************
    
    $('a[href^="#About"]').live('click',function(event){
    event.preventDefault();
    var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
    //change this number to create the additional off set        
    var customoffset = 0;
    $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
});

});
